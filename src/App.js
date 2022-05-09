import './App.css'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import StudentsAndBooks from './components/studentsAndBooks/studentsAndBooks.js';


function App() {
  return (
    <div className="App" > 
      <Router>
        <Routes>
          <Route path="/" element={<StudentsAndBooks/>}/>
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
