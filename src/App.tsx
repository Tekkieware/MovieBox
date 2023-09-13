import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Details from './pages/movie details';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/details' element= {<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
