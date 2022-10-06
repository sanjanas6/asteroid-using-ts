import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Index = () => {
  const [ipt, setInput] = useState<number | string>(0);
  const [id, setID] = useState<number | string>(0);
  const [but, setBut] = useState<any>(true);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState<any>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () =>{
      setLoad(true);
      const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=L6AW6ZMaTbURc0Kjh0eEPcbJDQmaqlWDjqVSAiHW`)
      const data = await res.json();
      console.log(data);
      setData([data]);
      setLoad(false);
    };
    fetchData();
  }, []);

  
  const getData = async (id : number | string) => {
    try{
      setLoad(true);
      const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=L6AW6ZMaTbURc0Kjh0eEPcbJDQmaqlWDjqVSAiHW`)
     if(!res.ok){
      alert('Not Found...!')
     }
     const data = await res.json();
     console.log(data);
     navigate('/info', {state:data});
     setLoad(false);
     }catch(e){
      alert("NOT MATCHED...!");
      setLoad(false);
     }
   };
   
   const InputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    // if(ipt.length === 0)
    setBut(false);
    console.log(e.target.value)
  };

  const randomID = (e: React.MouseEvent<HTMLButtonElement>) => {
    const random = Math.floor(Math.random() * 10);
    const id = data[0].near_earth_objects[random].id;
    console.log(data[0]);
    setID(id);
    getData(id);
  };
   
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    getData(ipt);
    setBut(true);
  };

  return (
    <div className="box">
      <input
        type="number"
        placeholder="Enter Asteroid ID"
        onChange={InputHandler}
      />
     {load && <h1>Loading...</h1>}
        <button
          disabled={but}
          style={{marginTop:"10px" , backgroundColor:"white"}}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          style={{marginTop:"10px" , backgroundColor:"white"}}
          onClick={randomID}
        >
          Random
        </button>
       
      </div>
    
  );
};

export default Index;
