import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home.js"
import './App.css';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';

const App = () => (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}>Hello!</Route>
        <Route path='/home' element={<AboutUs/>}>Hello!</Route>
      </Routes>
    </Router>
);

export default App;
