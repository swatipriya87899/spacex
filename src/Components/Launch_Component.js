import React from 'react';
import './Launch_Component.css';
import launch_image from './../Images/launch_image.png';

const Launch_Component = () => {
  return (
    <div className='launch_component'>
        <div className='launch_name'>
        Cape Canaveral Space Force Station Space Launch Complex 40
        </div>
        <div className='content'>
            <div className='launch_details'>
            SpaceX's primary Falcon 9 pad, where all east coast Falcon 9s launched prior to the AMOS-6 anomaly. Previously used alongside SLC-41 to launch Titan rockets for the US Air Force, the pad was heavily damaged by the AMOS-6 anomaly in September 2016. It returned to flight with CRS-13 on December 15, 2017, boasting an upgraded throwback-style Transporter-Erector modeled after that at LC-39A.
            </div>
            <div className='launch_image'>
                <img src={launch_image} style={{width:"100%"}}></img>
            </div>
        </div>
    </div>
  )
}

export default Launch_Component