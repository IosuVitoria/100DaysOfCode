import './App.css';
import Wheatherapp from './components/weatherapp/Wheatherapp';
import NavBar from './components/shared/nav/Nav';
import Footer from './components/shared/footer/Footer';
import Contact from './components/contact/contact';
import Cardgallery from './components/cardgallery/Cardgallery';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Wheatherapp />
      <Cardgallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
