import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react';

// MUI Imports
import CssBaseline from "@mui/material/CssBaseline";

// Components
import Home from './Components/Home';
import Listings from './Components/Listings';
import Login from './Components/Login';
import Header from './Components/Header';
import Testing from './Components/Testing';
import Register from './Components/Register';

// Contexts
// import DispatchContext from "./Contexts/DispatchContext";
// import StateContext from "./Contexts/StateContext";


function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
