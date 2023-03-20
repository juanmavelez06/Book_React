import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { Footer } from './components/Footer';
import Books from './components/Books';
import React, { useState } from 'react';



function App() {


  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <Skills/>
        <Books></Books>
        <Project/>
        <Footer/>
    </div>
  );
}

export default App;
