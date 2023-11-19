import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Transport } from './components/Transport/Transport';
import { Donations } from './components/Donations/Donations';
import { Study } from './components/Study/Study';
import MessageApp from './components/Study/Post';
import { Sharing } from './components/Sharing/Sharing';

import Login from './components/login/login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <Router>
      <Routes>
      {isLoggedIn ? (
              <Route path="/study" element={<Study />} /> // Redirect to Announcement if logged in
            ) : (
              <Route path="/" element={<Login />} /> // Display Login if not logged in
            )}
        <Route path="/study" element={<Study />} /> 
        <Route path="/transport" element={<Transport />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/sharing" element={<Sharing />} />
      </Routes>
    </Router>
  );
}

export default App;
