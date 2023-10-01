import {Routes,  Route, BrowserRouter, Navigate} from "react-router-dom";
import HeaderNav from '../src/components/layout/Header/HeaderNav';
import Footer from './components/layout/Footer/Footer';
import Curriculum from './components/Curriculum/Curriculum';
import Contacto from "./components/Contacto/Contacto";
import Inicio from "./components/Inicio/Inicio";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/Blog/Blog";


const MisRutas = () => {
  return (
   <BrowserRouter>
        {/* {Header y navegación} */}
        <HeaderNav />
        {/* Contenido central */}
        <Routes>
            <Route path="/" element={<Navigate to="/inicio" />}/>
            <Route path="/inicio" element={<Inicio />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/curriculum" element={<Curriculum />}/>
            <Route path="/contacto" element={<Contacto />}/>
        </Routes>
         {/* Pie de página */}
        <Footer />
   </BrowserRouter>
  )
}

export default MisRutas