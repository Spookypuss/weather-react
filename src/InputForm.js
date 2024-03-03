import React, { useState } from "react";
import "./InputForm.css";

export default function InputForm() {
    let [inputValue, setinputValue] = useState({ready: false, positionX: '', positionY: '', positionZ: '', charge: ''})

    function handleChange(event) {
        console.log(event.target);
        let {name, value} = event.target;
        setinputValue({...inputValue, [name]: value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        let particle = {
            ready: true,
            positionX: Number(inputValue.positionX),
            positionY: Number(inputValue.positionY),
            positionZ: Number(inputValue.positionZ),
            charge: Number(inputValue.charge)
          };
        console.log(particle);
    }

    return (
        <div className = "InputForm">
            <form onSubmit={handleSubmit}>
            <div class="row" id="particle">
                <div class="col">
                    <h4 class="text-center">1</h4>
                </div>
                <div class="col">
                    <input type="number" placeholder="0" autoFocus autoComplete="off" onChange={handleChange} id="x-position-1"/>
                </div>
                <div class="col">
                    <input type="number" placeholder="0" autoComplete="off" onChange={handleChange} id="y-position-1"/>
                </div>
                <div class="col">
                    <input type="number" placeholder="0" autoComplete="off" onChange={handleChange} id="z-position-1"/>
                </div>
                <div class="col">
                    <input type="number" placeholder="0" autoComplete="off" onChange={handleChange} id="charge-1"/>
                </div>  
            </div>
            <div className="d-grid gap-2">
                <button type="submit" className="submit-btn btn primary-btn" >Submit</button>
            </div>
            </form>
        </div>
    );
}