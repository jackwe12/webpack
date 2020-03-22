import React from "react";
import ReactDOM from "react-dom";
import {useState} from 'react';
import axios from "axios";

const Form = () =>{
    const [description, setDescription] =useState("");
    const [location, setLocation] =useState("");
    const [jobData, setJobData] = useState([]);

   const handleChangeDes = (e) => {
        setDescription(e.target.value)
    }
    const handleChangeLoc = (e) => {
        setLocation(e.target.value)
    }
    const handleSubmit =   (e) => {
        e.preventDefault();
        const response =  axios.post('http://localhost:8080/api/jobs',{
            des:description,
            loc:location
        }).then((data)=>{
            setJobData(data.data);
        })
        // .then(console.log(response))
        // .then(setJobData(response))
    }
    return(
        <form>
            <label>Description</label>
            <input type="text" value={description} onChange={handleChangeDes}/>
            <label>Location</label>
            <input type="text" value={location} onChange={handleChangeLoc}/>
            <div>
                {jobData.map((item, index)=>{
                    return(
                        <>
                            <h1 key={index}>Job Title:{item.title}</h1>
                            <p key={index}>Company:{item.company}</p>
                            <p key={index}>Location:{item.location}</p>
                            {/* <p key={index}>description:{item.description}</p> */}


                        </>
                    )
                })}
            </div>
            <button onClick={handleSubmit}>submit</button>
        </form>
    )
}

export default Form;


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;



