import React,{useState, useEffect} from 'react';
import Card from './Card';
import './Show_LaunchPad.css';

const Show_LaunchPad = () => {
    //storing lauchpad data
    const [lauchpad_data, setLauchpad_data] = useState([]);

    //storing launch data
    let launch_data=[];



    //fetching launchpad from API's
    const getData = async() => {
        await fetch(`https://api.spacexdata.com/v4/launchpads`)
          .then((res) => res.json())
          .then((res) => {
            setLauchpad_data(res);
            res.map( async (lauchpad)=>{
              let count=0;
              let array=[];
              while(count<lauchpad.launches.length && count<3){
               await fetch(`https://api.spacexdata.com/v4/launches/${lauchpad.launches[count]}`)
                .then((res)=>res.json())
                .then((data)=> array.push(data.name));
                count++;
              }
             launch_data.push(array);
            })
          })
      }


      useEffect(() => {
        getData()
        console.log(launch_data)
      }, [])

       
  return (
    <div className='show_launchpad'>
        {
          
            lauchpad_data.map((data)=> {
                return (
                <Card images={data.images.large[0]} name={data.name} details={data.details} status={data.status} top_launches={launch_data} key={data.id}></Card>
                )
            })
        }
    </div>
  )
}

export default Show_LaunchPad