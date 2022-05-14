import React from 'react'
import Launch_Component from '../Components/Launch_Component';
import { useParams } from 'react-router-dom';

const Launch = () => {
  const params = useParams();
  const {launch_id} = params


  return (
    <div style={{background: "#0B0B0B", minHeight:"100vh"}}>
      <Launch_Component id={launch_id}></Launch_Component>
  </div>
  )
}

export default Launch