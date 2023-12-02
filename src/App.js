import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Tran from './components/transaction/Tran';
import Data from './components/data/Data'

import './App.css';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route exact path='/' element = {<Home/>} ></Route>
        <Route exact path='/transactions' element = {<Tran/>} ></Route>
        <Route exact path='/data' element = {<Data/>} ></Route>


      </Routes>

    </div>
  );
}

export default App;
