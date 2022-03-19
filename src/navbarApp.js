import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './pages/create';
import Filters from './pages/filters';

function App() {
return (
	<Router>
    <Navbar />
    <Routes>
      <Route path='/create' element={<Create/>} />
      <Route path='/filters' element={<Filters/>} />
    </Routes>
	</Router>
);
}

export default App;
