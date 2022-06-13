import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from './About';
import Insurance from './Insurance';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';
import Gallery from './Gallery';

export default function App() {
  return (
    <Router>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to="./">
                  {' '}
                  <img
                    className="logo"
                    src="assets/images/slogo.png"
                    height={92}
                    width={92}
                  />
                </Link>
                <ul className="nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="has-sub">
                    <Link to="#">Our Services</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/insurance">Insurance</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <Routes>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Insurance" element={<Insurance />}></Route>
      <Route path="/Services" element={<Services />}></Route>
      <Route path="/Gallery" element={<Gallery />}></Route>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
