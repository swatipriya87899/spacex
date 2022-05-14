import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Show_LaunchPad.css";

const Show_LaunchPad = () => {
  //storing lauchPad's required data
  const [launchPad_data, setLaunchPad_data] = useState([]);

  //fetching launchpads from API
  const getData = async () => {
    const launchPad_data = await fetch(`https://api.spacexdata.com/v4/launchpads`).then((res) => res.json());
    let launchPad_array=await launchPad_data.map((lauchpad) => {
      //Setting Values of LauchPad's required data
      let launchPad_individual_data = {
        id: `${lauchpad.id}`,
        image: `${lauchpad.images.large}`,
        name: `${lauchpad.name}`,
        details: `${lauchpad.details}`,
        status: `${lauchpad.status}`,
        launch: lauchpad.launches,
      };
      return launchPad_individual_data
    });
    setLaunchPad_data(launchPad_array);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="show_launchpad">
      {launchPad_data &&
        launchPad_data.map((data) => {
          return (
            <Card
              name={data.name}
              details={data.details}
              status={data.status}
              image={data.image}
              launches={data.launch}
              key={data.id}
            ></Card>
          );
        })}
    </div>
  );
};

export default Show_LaunchPad;
