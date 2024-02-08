import React from "react";
import "./Home.css"; // Ensure you're importing your CSS file
import { Button, Dropdown, TextInput } from "flowbite-react";
import { Label } from "flowbite-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate(); // useNavigate is a hook, so we call it to get the navigate function

    const handleSubmit = (e) => {
        e.preventDefault();
        const height = document.getElementById("height").value;
        const weight = document.getElementById("weight").value;
        const age = document.getElementById("age").value;
        navigate('/result'); // use the navigate function to go to the '/result' route
    }
  return (
    <div className="" id="home" style={{width: '100vw', height: '100vh'}}>
      {/* ... */}
      <div className="flex flex-col flex-container">
      <form className="grid grid-cols-2 gap-4">
        {" "}
        {/* Apply grid layout */}
        <div>
          <Label value="Height" style={{fontWeight:"bolder"}}></Label>
          <TextInput
            type="text"
            placeholder="Height"
            id="height"
            // onChange={handleChange}
            className="w-full"
          ></TextInput>
        </div>
        <div>
          <Label value="Weight" style={{fontWeight:"bolder"}}></Label>
          <TextInput
            type="text"
            placeholder="Weight"
            id="weight"
            // onChange={handleChange}
            className="w-full"
          ></TextInput>
        </div>
        <div>
          <Label value="Age" style={{fontWeight:"bolder"}}></Label>
          <TextInput
            type="text"
            placeholder="Age"
            id="age"
            // onChange={handleChange}
            className="w-full"
          ></TextInput>
        </div>
        <div className="gender-container">
        <Label value="Gender" style={{fontWeight:"bolder"}}></Label>
        <select>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        </div>
        
        
      </form>
      <div className="button-container">
      <Link to={'/result'}>
        <Button className="pill-button" style={{color:"black"}} onClick={handleSubmit}>Submit</Button>
      </Link>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
