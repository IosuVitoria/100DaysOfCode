import React, { useState, useEffect } from 'react';
import "./clock.css";


const Reloj = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h3>{formattedTime}</h3>
    </div>
  );
};

export default Reloj;
