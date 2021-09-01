import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;