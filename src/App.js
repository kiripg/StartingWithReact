
import React, { useState, useEffect } from 'react';
import MyButton from "./components/base/buttons/button.js";

export default function MyApp() {

  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (count === 5) {
      setShowMessage(true);
    } else {
      setShowMessage(false)
    }
  }, [count]);


  function handleClick() {
    setCount(count + 1);
  }


  return (
    <div>
      <p>Welcome</p>
      <MyButton
        messageWhenReached="You've reached 5!"
        count={count}
        handleClick={handleClick}
        showMessage={showMessage}
      />
    </div>
  );
}

