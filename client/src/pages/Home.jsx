import React from "react";
import "./Home.css"; // Ensure you're importing your CSS file
import { Button, Dropdown, TextInput } from "flowbite-react";
import { Label } from "flowbite-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';





function Home() {
    const navigate = useNavigate(); // useNavigate is a hook, so we call it to get the navigate function
    const [formData, setFormData] = useState({ weight: '', height: '',age: '', gender: 'male' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const age = document.getElementById("age").value;
    const gender = "male"// Assuming you have a gender field
    console.log(height, weight, age)
    try {
        let data =  { "height":height, "weight":weight, "age":age,"gender": gender };
        const response = await fetch('http://localhost:8080/api/auth/home',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          const da = await response.json();
      console.log(da);
      console.log(response);
      navigate('/result');
    } catch (error) {
      console.error(error);
    }
  }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const height = document.getElementById("height").value;
    //     const weight = document.getElementById("weight").value;
    //     const age = document.getElementById("age").value;
    //     console.log(height, weight, age);
    //     navigate('/result'); // use the navigate function to go to the '/result' route
    // }
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
            value={formData.height}
            name="height"
            type="text"
            placeholder="Height"
            id="height"
            onChange={handleChange}
            className="w-full"
          ></TextInput>
        </div>
        <div>
          <Label value="Weight" style={{fontWeight:"bolder"}}></Label>
          <TextInput
          value={formData.weight}
            name="weight"
            type="text"
            placeholder="Weight"
            id="weight"
            onChange={handleChange}
            className="w-full"
          ></TextInput>
        </div>
        <div>
          <Label value="Age" style={{fontWeight:"bolder"}}></Label>
          <TextInput
           value={formData.age}
            name="age"
            type="text"
            placeholder="Age"
            id="age"
            onChange={handleChange}
            className="w-full"
          ></TextInput>
        </div>
        <div className="gender-container">
        <Label value="Gender" style={{fontWeight:"bolder"}}></Label>
        <select >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        </div>
        
      <div className="button-container">
      <Link to={'/result'}>
        <Button className="pill-button" style={{color:"black"}} onClick={handleSubmit}>Submit</Button>
      </Link>
        </div>
        
      </form>
      </div>

      
    </div>
  );
}

export default Home;
