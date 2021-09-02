import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div id="page-container">
      <main id="content-wrap">
        <Header></Header>
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;