
import React, { useState, useEffect } from 'react';
import MyButton from "./../base/buttons/button.js";
import './../../App.css';


export default function MyApp() {

  

    let [count, setCount] = useState(0);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        if (count === 5) {
            setShowButton(true);
        } else {
            setShowButton(false)
        }
    }, [count]);


    function handleClick() {
        setCount(count + 1);
    }

   

    return (

        <div className='welcome'>
            <p>Welcome</p>
            <MyButton
                count={count}
                handleClick={handleClick}
                showButton={showButton}
            />

        </div>

    );
}

