import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./components/Header/Header"
import Home from './components/Home';
import Navtop from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navtop />
      <Home />
      
    </div>
  );
}

export default App;
