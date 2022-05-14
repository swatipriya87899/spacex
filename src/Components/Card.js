import React,{useState} from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card_wrap">
      <div className="status">{props.status}</div>
      <div className="card_details">
        <img src={props.image} width="100%" height="100%"></img>
        <div className="card_name">{props.name}</div>
        <div className="card_details">{props.details}</div>
        {console.log(props.top_launches)}
        {
        props.top_launches.length>0 && <div className="top_launches_heading">
          Top Launches
        </div>
        }
        <div className="top_launches_box">
          {props.top_launches.length>0 &&
             props.top_launches.map((launches)=>{
              // return <div className="top_launches">{launches.name}</div>
              return console.log(launches.name)
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
