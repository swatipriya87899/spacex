import React, { useEffect, useState } from "react";
import "./Launch_Component.css";
import launch_image from "./../Images/launch_image.png";
import YouTube from "react-youtube";

const Launch_Component = (props) => {
  //storing launch data
  let launch = {};
  const [launch_obj, setLaunch_obj] = useState({});
  //fetching lauch data
  const getData = async () => {
    let data = await fetch(`
    https://api.spacexdata.com/v4/launches/${props.id}`).then((res) =>
      res.json()
    );

    // Convert timestamp to date
    let date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(data.date_unix);
    // setLaunch(data);
    launch = {
      name: data.name,
      youtube_id: data.links.youtube_id,
      large_image: data.links.patch.large,
      reused: data.cores.reused,
      wikipedia: data.links.wikipedia,
      date: date,
    };
    setLaunch_obj(launch);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="launch_component">
       {console.log(launch_obj)}
      <div className="launch_name">{launch_obj.name}</div>
      <div></div>
      <div className="content">
        <div className="launch_image">
          <img src={launch_obj.large_image} style={{ width: "100%" }}></img>
        </div>
        <div className="launch_details">
        <div className="launch_date">Launch Date: {launch_obj.date}</div>
        {launch_obj.reused?<div className="launch_usability">Reused</div>:
        <div className="launch_usability">Not Reused</div>}
          <a href={launch_obj.wikipedia}>
            <div className="iframe_container">
              <iframe
                src={launch_obj.wikipedia}
                scrolling="no"
                className="iframe_content"
              ></iframe>
            </div>
          </a>
        </div>
      </div>
      <div className="launch_youtube">
        <YouTube videoId={launch_obj.youtube_id} />
      </div>
    </div>
  );
};

export default Launch_Component;
