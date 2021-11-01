import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import {First,Second} from './pages/First';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
// import NavBar from './components/NavBar';
// import Footer from './components/Footer';



function App() {
  return (
    <>
    <Route exact path='/Home' component={ Home }/>
    <Route exact path='/' component={ First }/>
    <Route exact path='/' component={ Second }/>
    <Route exact path='/ContactUs' component={ ContactUs }/>
      
    </>
  );
}

export default App;
