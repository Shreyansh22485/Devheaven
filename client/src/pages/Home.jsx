import React from 'react';
import './Home.css'; // Ensure you're importing your CSS file
import { Button, TextInput } from 'flowbite-react';
import { Label } from 'flowbite-react';

function Home() {
  return (
    <div className="flex flex-col flex-container">
      <div className="rainbow-text">
        <span><h1 className="curved-text">Which pokemon are you?</h1></span>
      </div>
      
      <div className="flex flex-row label-input-container">
      <Label className="fb-label" value="Height: ">Height:</Label>
        <TextInput type="text" id="height" name="height" />
      </div>
      <div className="flex flex-row label-input-container">
      <Label className="fb-label" value="Weight: ">Weight:</Label>
        <TextInput type="text" id="weight" name="weight" />
      </div>
      <Button className="btn btn-primary">Submit</Button>
    </div>
  );
}

export default Home;