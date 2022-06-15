import React from 'react';
import "./styles/reset.css"

import Header from './components/Header';
import Description from './components/Description';
import Filter from './components/Filter';
import DataList from "./components/DataList"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Filter />
      <DataList />
      <Footer />
    </div>
  );
}

export default App;
