import React from "react";
import { useLocation } from "react-router-dom";

type Asteroid = {
  id: number;
  name: string;
  name_limited: string;
  designation: number;
  estimated_diameter: {
    feet: {
      estimated_diameter_max: number;
    }
  }
  orbital_data: {
    orbit_id: number;
  }
};

const Information = () => {
  const location = useLocation();
  const data = location.state as Asteroid
  // const { state } = useLocation();
  console.log(data);

  return (
    <div className="information" data-testid="divmain">
      <h2 style={{textAlign: "center" , color:"Blue"}}>Asteroid id: {data?.id}</h2>
      <h3 style={{textAlign: "center" , color:"Blue"}}>Asteroid name: {data?.name}</h3>
      <h3 style={{textAlign: "center" , color:"Blue"}}>Asteroid Limited name: {data?.name_limited}</h3>
      <h3 style={{textAlign: "center" , color:"Blue"}}>Asteroid Designation: {data?.designation}</h3>
      <h3 style={{textAlign: "center" , color:"Blue"}}>Max. Estimated Diameter: {data?.estimated_diameter.feet.estimated_diameter_max}</h3>
      <h3 style={{textAlign: "center" , color:"Blue"}}>Orbit Id: {data?.orbital_data.orbit_id}</h3>
    </div>
  );
};

export default Information;
