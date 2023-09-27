import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BookList from '../../BookList/BookList';
import Contact from '../../Contact/Contact';
import Home from '../../Home/Home';
import "./nav.css"

const Nav = () => {
    return (
        <Router>
            <div className="navbar-container">
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/libros" className="nav-link">
                                Listado de Libros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-link">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/libros" element={<BookList />} />
                    <Route path="/contacto" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Nav;
