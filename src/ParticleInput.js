// MAKE AN OBJECT OF PARTICLE 1's DATA

import React, { useState } from "react";
import "./ParticleInput.css";
import PairInteraction from "./PairInteraction";

export default function ParticleInput() {
    let [particle, setParticle] = useState ({positionX1: '', positionY1: '', positionZ1: '', charge1: '', positionX2: '', positionY2: '', positionZ2: '', charge2: ''})

    function handleSubmit(event){
        event.preventDefault();

        let newParticle = ( {
            positionX: Number(particle.positionX1),
            positionY: Number(particle.positionY1),
            positionZ: Number(particle.positionZ1),
            charge: Number(particle.charge1)
        });
        return newParticle;
    }

    function handleChange(event) {
        let { name, value } = event.target;
        setParticle( {
            ...particle, [name]: value
        });
    }

    //form with onsubmit 

    return (
        <form onSubmit={handleSubmit}>
        <div className="ParticleInput">
            <div className="row particle-1"> 
                <div className="col">
                    <h4 className="text-center">1</h4>
                </div>
                <div className="col">
                    <input type="float" placeholder="0" autoFocus autoComplete="off" className="prompt" name="positionX1" value={particle.positionX1} onChange={handleChange} id="x-position-1"/>
                </div>
                <div className="col">
                    <input type="float" placeholder="0" autoComplete="off" className="prompt" name="positionY1" value={particle.positionY1} onChange={handleChange} id="y-position-1"/>
                </div>
                <div className="col">
                    <input type="float" placeholder="0" autoComplete="off" className="prompt" name="positionZ1" value={particle.positionZ1} onChange={handleChange} id="z-position-1"/>
                </div>
                <div className="col">
                    <input type="float" placeholder="0" autoComplete="off" className="prompt" name="charge1" value={particle.charge1} onChange={handleChange} id="charge-1"/>
                </div>  
                <br />
            </div>
            <div className="row particle-2">
                <div className="col">
                    <h4 className="text-center">2</h4>
                </div>
                <div className="col">
                    <input type="float" placeholder="0" autoFocus autoComplete="off" className="prompt" name="positionX2" value={particle.positionX2} onChange={handleChange} id="x-position-1"/>
                </div>
                <div className="col">
                    <input type="float" placeholder="0" autoComplete="off" className="prompt" name="positionY2" value={particle.positionY2} onChange={handleChange} id="y-position-1"/>
                </div>
                <div className="col">
                    <input type="float" placeholder="0" autoComplete="off" className="prompt" name="positionZ2" value={particle.positionZ2} onChange={handleChange} id="z-position-1"/>
                </div>
                <div className="col">
                    <input type="float" placeholder="0" autoComplete="off" className="prompt" name="charge2" value={particle.charge2} onChange={handleChange} id="charge-1"/>
                </div> 
            
        </div>
        <div className="d-grid gap-2">
            <button type="submit" className="submit-btn btn btn-primary" id="submit-data">Submit</button>
        </div> 
        <br />
        <PairInteraction data={particle}/>
        </div>
        </form>
    );
}


