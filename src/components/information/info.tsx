import React from "react";
import { useLocation } from "react-router-dom";

type Asteroid = {
  id: number;
  name: string;
};

const Information = () => {
  const location = useLocation();
  const data = location.state as Asteroid
  // const { state } = useLocation();
  console.log(data);

  return (
    <div className="information">
      <h2 style={{textAlign: "center" , color:"Blue"}}>Asteroid id: {data.id}</h2>
      <h3 style={{textAlign: "center" , color:"Blue"}}>Asteroid name: {data.name}</h3>
    </div>
  );
};

export default Information;
