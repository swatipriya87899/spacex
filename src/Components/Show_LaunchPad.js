import React,{useState, useEffect} from 'react';
import Card from './Card';
import './Show_LaunchPad.css';

const Show_LaunchPad = () => {
    
  //storing lauchPad's required data
  const [launchPad_data, setLaunchPad_data] = useState([]);

  //fetching launchpads from API
  const getData =  () => {

    let lauchPad_array=[];

     fetch(`https://api.spacexdata.com/v4/launchpads`)
    .then((res)=>res.json())
    .then((data)=> {
      data.map( (lauchpad)=>{
        //fetching launches name from API with API 
        let launch_data=[]
        let count=0;
        let length=lauchpad.launches.length;
        while(count<length && count<3){
          let launch={};
           fetch(`https://api.spacexdata.com/v4/launches/${lauchpad.launches[count]}`)
          .then((res)=>res.json())
          .then((data)=>{
            launch={
              name:`${data.name}`,
              id:`${data.id}`
            } 
            launch_data.push(launch);    
          })
          count++;
         }
        //Setting Values of LauchPad's required data
        let launchPad_individual_data={};
        launchPad_individual_data={
          id:`${lauchpad.id}`,
          image:`${lauchpad.images.large}`,
          name:`${lauchpad.name}`,
          details:`${lauchpad.details}`,
          status:`${lauchpad.status}`,
          launch:launch_data
        }
        lauchPad_array.push(launchPad_individual_data);
      })
      setLaunchPad_data(lauchPad_array);
    });
  }
   

      useEffect(() => {
        getData();
      }, [])

       
  return (
    <div className='show_launchpad'>
      {launchPad_data && 
      launchPad_data.map((data)=>{
       return <Card name={data.name}  details={data.details}  status={data.status} image={data.image} top_launches={data.launch} key={data.id}></Card>
      })
      }
    </div>
  )
}

export default Show_LaunchPad