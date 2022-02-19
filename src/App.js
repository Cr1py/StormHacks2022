import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AddNotes from './pages/AddNotes';
import MyNotes from './pages/MyNotes';


function App() {
  return (
      <div className= 'App'>

      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/addnotes' element={<AddNotes/>} />
            <Route path='/mynotes' element={<MyNotes/>} />
          </Routes>
        </Router>
      </>

      </div>

  )
}

export default App; 

