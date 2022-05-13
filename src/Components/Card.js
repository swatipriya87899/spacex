import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card_wrap">
       {console.log(props.top_launches)}
      <div className="status">{props.status}</div>
      <div className="card_details">
        <img src={props.images} width="100%" height="100%"></img>
        <div className="card_name">{props.name}</div>
        <div className="card_details">{props.details}</div>
        {/* <div className='tag_box'>  {props.tags.map((tag)=><div className='tags'>{tag}</div>)} </div> */}
        <div className="top_launches_heading">
          Top Launches
        </div>
        <div className="top_launches_box">
          {
            props.top_launches.map((launches)=>{
              <div className="top_launches">{launches}</div>
            })
          }
          {/* <div className="top_launches">Falcon 9 Test Flight</div>
          <div className="top_launches">Falcon 9 Test Flight</div>
          <div className="top_launches">Falcon 9 Test Flight</div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
