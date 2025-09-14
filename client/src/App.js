import './App.css';
import * as React from 'react';
import Header  from './components/views/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/views/Home/Home';
import Contact from './components/views/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
