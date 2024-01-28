import React, { useState, useEffect } from 'react';
import StyledLink from './Timer.styled'

const Timer = () => {
  const [seconds, setSeconds] = useState(5);
  const [timerCompleted, setTimerCompleted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        setTimerCompleted(true);
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      {timerCompleted ? (
        <div>
          <button className="custom-button" onClick={goBack}>Go Back</button>
        </div>
      ) : (
        <div>
          <p>Time left: {seconds} seconds</p>
        </div>
      )}
      <style>
        {`
          .custom-button {
            background-color: rgb(29, 29, 39);
            color:rgb(238, 234, 234);
            padding: 10px 15px;
            margin-top:15px;  
            font-size: 16px;
            border: none;
            cursor: pointer;
            &:hover {
              color: rgb(26, 127, 141);
            }
          }
        `}
      </style>
    </div>
  );
};


function FullTimer() {
  return (
    <div>
      <Timer />
    </div>
  );
}

export default FullTimer;
