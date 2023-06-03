import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar';
import Contact from './components/contact';
import Landing from './components/landing';
import Posts from './components/posts';

function App() {
  return (
  <BrowserRouter>
  <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;