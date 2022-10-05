import React from 'react';
import { Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/booklist' element={<BookList />} />
        <Route path="/newbook" element={<NewBookForm />} />
      </Routes>
    </div>
  );
}

export default App;
