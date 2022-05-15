import React from "react";
import Hero_Section from "../Components/Hero_Section";
import Show_LaunchPad from "../Components/Show_LaunchPad";

const LaunchPad = () => {
  return (
    <div style={{ background: "#0B0B0B" }}>

      {/* Hero Section of Launchpad Page */}
      <Hero_Section></Hero_Section>

      {/* Displaying All the Launchpads */}
      <Show_LaunchPad></Show_LaunchPad>
    </div>
  );
};

export default LaunchPad;
