import { postApiCall } from 'gfdu';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const[value,setValue]=useState({
        Name:"",
        Job:"",
    });
    const[nameerror,setNameError]=useState(false);
    const[joberror,setJobError]=useState(false);
    const Navigate=useNavigate();

    const handleChange=(e)=>{
    setValue({...value,[e.target.name]:e.target.value})
  }

    const handleSubmit = (e) => {
    e.preventDefault();
     var data={
        Name:value?.Name,
        Job:value?.Job,
     }
     if(!value?.Name){
      setNameError(true);
      console.log("name is missing");
     }
     else if(!value?.Job){
      setJobError(true);
      console.log("job is missing");
     }
     else{
      postApiCall(`users`, data,(response) => {
          console.log(response);
          Navigate("/");
      })}
    }
 
  return (
    <div>
        <label for="name">Name</label><br/>
        <input placeholder="Name" type="text" id="name" name="Name" onChange={handleChange}></input><br/>
        {nameerror && value.Name === "" ? (
          <label style={{ color: "red" }}>Enter name</label>
        ) : (
          ""
        )}
        <br/><br/>
        <label for="job">Job</label><br/>
        <input placeholder="Job" type="text" id="job" name="Job" onChange={handleChange}></input><br/>
        {joberror && value.Job === "" ? (
          <label style={{ color: "red" }}>Enter job</label>
        ) : (
          ""
        )}
        <br/><br/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Add
