import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = ()  =>{
        const newStepCount = steps + 1;
        setSteps(newStepCount);
    }

    useEffect( () =>{
        console.log(steps);
    }, [steps])
    
    return (
        <div>
            <h1>Watch</h1>
            <h3>My current step: {steps}</h3>
            <button onClick={increaseSteps}>Clicked</button>
        </div>
    );
};

export default Watch;