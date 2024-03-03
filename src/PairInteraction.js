//take two lots of data and find the pair interaction energy

import React from "react";

export default function PairInteraction(props) {
    let x1 = Number(props.data.positionX1);
    let x2 = Number(props.data.positionX2);
    let y1 = Number(props.data.positionY1);
    let y2 = Number(props.data.positionY2);
    let z1 = Number(props.data.positionZ1);
    let z2 = Number(props.data.positionZ2);
    let q1 = Number(props.data.charge1);
    let q2 = Number(props.data.charge2);
    

    console.log(props.data);
    console.log(x1, x2, y1, y2, z1, z2);


    function findDistance() { //Want this to reload when something changes!!
        let distance = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2) + ((z2-z1)**2))
        
        return distance;
    }

    function findEnergy() {
        let k = 0.3062;
        let distance = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2) + ((z2-z1)**2))
        let energy = ((q1 * q2) / distance) * k;

        console.log(distance);
        console.log(q1, q2, k);

        return energy;
    }



    return (
        <div className="PairInteraction">
            <h3>The distance is {findDistance()}</h3>
            <h3>The total energy is {findEnergy()}</h3>
            <h3>The number of particle pair interactions is 1</h3>
        </div>
    )
}

//how to calculate particle pair interactions?