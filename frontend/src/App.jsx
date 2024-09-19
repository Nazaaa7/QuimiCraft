import React from 'react';
import Navbar from './views/navbar';
import Banner from './views/banner';
import Categories from './views/categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Categories />
    </div>
  );
}

export default App;
