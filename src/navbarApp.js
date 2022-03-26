import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Create from './pages/create';
import Filters from './pages/filters';

function App() {
return (
	<Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/filters' element={<Filters/>} />
    </Routes>
	</Router>
);
}

export default App;
