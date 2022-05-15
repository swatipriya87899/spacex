import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import ReadMore from "./ReadMore";

const Card = (props) => {

  // State for Storing Top 3 launches 
  const [topLaunch, setTopLaunch] = useState([]);

  useEffect(() => {
    let count = 0;
    let launchesLen = props.launches.length;
    while (count < launchesLen && count < 3) {
      async function fetchMyAPI(id) {
        //fetching API's with launch id
        const data = await fetch(
          `https://api.spacexdata.com/v4/launches/${id}`
        ).then((res) => res.json());
        const launchObj = {
          id:data.id,
          name: data.name,
          date: data.date_local,
          image: data.links.patch,
        };
        setTopLaunch((prevState)=>{
          return [...prevState,launchObj]
        });
      }

      fetchMyAPI(props.launches[count])
    count++;
    }
  }, [props.launches]);

  
  return (
    <div className="card_wrap" id="card_group">

      {/* Status of top launch  */}
      {props.status==="active" ?<div className="status" style={{background:"green"}}>{props.status.toUpperCase()}</div>:
      <div className="status">{props.status.toUpperCase()}</div>
      }
      <div className="card_details">

        {/* Image of Top launch */}
        <div className="card_image">
          <img src={props.image} width="100%" height="100%"></img>
        </div>

        {/* Name of top launch */}
        <div className="card_name">{props.name}</div>

        {/* Top launch details with Reading more feature */}
        <ReadMore text={props.details}></ReadMore>

        {/* Top Launch Heading if Available or not */}
        {topLaunch.length>0 ? <div className="top_launches_heading">Top Launches</div>:
        <div className="top_launches_heading">No Launch Available</div>
        }

       {/*Displaying top 3 Lauches */}
        {topLaunch.map((launches) => {
          return (
          <Link to={`/launch/${launches.id}`} style={{textDecoration:"none"}}>
          <div className="top_launches" key={launches.id}>{launches.name}</div>
          </Link>
          )
        })}
      </div>
    </div>
  );
};

export default Card;
