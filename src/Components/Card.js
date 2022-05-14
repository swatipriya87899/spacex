import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import ReadMore from "./ReadMore";

const Card = (props) => {
  const [topLaunch, setTopLaunch] = useState([]);

  useEffect(() => {
    let count = 0;
    let launchesLen = props.launches.length;
    while (count < launchesLen && count < 3) {
      async function fetchMyAPI(id) {
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
      {props.status==="active" ?<div className="status" style={{background:"green"}}>{props.status.toUpperCase()}</div>:
      <div className="status">{props.status.toUpperCase()}</div>
      }
      <div className="card_details">
        <div className="card_image">
          <img src={props.image} width="100%" height="100%"></img>
        </div>
        <div className="card_name">{props.name}</div>
        <ReadMore text={props.details}></ReadMore>
        {topLaunch.length>0 ? <div className="top_launches_heading">Top Launches</div>:
        <div className="top_launches_heading">No Launch Available</div>
        }

       {/* Top 3 Lauches */}
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
