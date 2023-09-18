import { useState } from "react";
import "./App.css";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://i.ytimg.com/vi/-f5DSygcsfM/maxresdefault.jpg",
  "https://th.bing.com/th/id/R.1363e81d3b98e53d308de43b689dcf69?rik=QcQg9sZXYyYwMQ&riu=http%3a%2f%2fhddesktopwallpapers.in%2fwp-content%2fuploads%2f2015%2f09%2famazing-wallpapers-hd-680x425.jpg&ehk=u0OujgpykyqUhiz8wVXayGmsFpOAbqiLIAYjwWWNNnw%3d&risl=&pid=ImgRaw&r=0"
];

const App = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current + images.length - 1) % images.length);
  };

  return (
    <div className="container">
      <h2>Carousel de fotos</h2>
      <div className="slider">
        <button className="left-arrow" onClick={prevSlide}>
          &#9001;
        </button>
        <div className="slide">
          <img src={images[current]} alt="images" className="slide-image" />
        </div>
        <button className="right-arrow" onClick={nextSlide}>
          &#9002;
        </button>
      </div>
    </div>
  );
};

export default App;
