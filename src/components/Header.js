import React from 'react';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from './About';
import Insurance from './Insurance';
import Contact from './ContactUs';
import Home from './Home';
import Services from 'Services';
import Gallery from 'Gallery';

export default function App() {
  return (
    <Router>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {'{'}/* {/* ***** Logo Start ***** */} */{'}'}
                <a href="./">
                  {' '}
                  <img
                    className="logo"
                    src="assets/images/slogo.png"
                    height={92}
                    width={92}
                  />
                </a>
                {'{'}/* {/* ***** Logo End ***** */} */{'}'}
                {'{'}/* {/* ***** Menu Start ***** */} */{'}'}
                <ul className="nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li className="has-sub">
                    <a href="#">Our Services</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/services">Services</a>
                      </li>
                      <li>
                        <a href="/insurance">Insurance</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="./contact">Contact Us</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {'{'}/* {/* ***** Menu End ***** */} */{'}'}
              </nav>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/AboutUs" element="{<AboutUs">
          {'}'}&gt;
        </Route>
        <Route path="/Coffee" element="{<Coffee">
          {'}'}&gt;
        </Route>
        <Route path="/ContactUs" element="{<ContactUs">
          {'}'}&gt;
        </Route>
        <Route path="/" element="{<Home">
          {'}'} /&gt;
        </Route>
      </Routes>
    </Router>
  );
}
