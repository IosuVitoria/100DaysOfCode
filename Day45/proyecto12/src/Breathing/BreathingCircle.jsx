import { useEffect } from 'react';
import '../App.css';

const BreathingCircle = () => {
  useEffect(() => {
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    const totalTime = 19000;
    const breatheTime = 4000;
    const holdTime = 7000;

    const breatheMovement = () => {
      text.innerText = 'Inspira!';
      container.className = 'container grow';

      setTimeout(() => {
        text.innerText = 'Retén el aire';

        setTimeout(() => {
          text.innerText = 'Expira suavemente...';
          container.className = 'container shrink';
        }, holdTime);
      }, breatheTime);
    }

    breatheMovement();

    const intervalId = setInterval(breatheMovement, totalTime);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="container" className="container">
      <div className="circle"></div>
      <p id="text"></p>
      <div className="pointer-container">
        <span className="pointer"></span>
      </div>
      <div className="gradient-circle"></div>
    </div>
  );
};

export default BreathingCircle;
