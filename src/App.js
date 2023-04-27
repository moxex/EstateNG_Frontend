import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react';
import { useImmerReducer } from 'use-immer';

// MUI Imports
import CssBaseline from "@mui/material/CssBaseline";

// Components
import Home from './Components/Home';
import Listings from './Components/Listings';
import Login from './Components/Login';
import Header from './Components/Header';
import Testing from './Components/Testing';
import Register from './Components/Register';
import AddProperty from './Components/AddProperty';
import Profile from './Components/Profile';
import Agencies from './Components/Agencies';
import AgencyDetail from './Components/AgencyDetail';
import ListingDetail from './Components/ListingDetail';

// Contexts
import DispatchContext from "./Contexts/DispatchContext";
import StateContext from "./Contexts/StateContext";


function App() {

  const initialState = {
    userUsername: localStorage.getItem("theUserUsername"),
    userEmail: localStorage.getItem("theUserEmail"),
    userId: localStorage.getItem("theUserId"),
    userToken: localStorage.getItem("theUserToken"),
    // userIsLogged: localStorage.getItem("theUserUsername") ? true : false,
  };

  function ReducerFuction(draft, action) {
    switch (action.type) {
      case "catchToken":
        draft.userToken = action.tokenValue;
        break;
      case "userSignsIn":
        draft.userUsername = action.usernameInfo;
        draft.userEmail = action.emailInfo;
        draft.userId = action.IdInfo;
        // draft.userIsLogged = true;
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addproperty" element={<AddProperty />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/agencies/" element={<Agencies />} />
            <Route path="/agencies/:id" element={<AgencyDetail />} />
            <Route path="/listings/:id" element={<ListingDetail />} />
            <Route path="/testing" element={<Testing />} />
          </Routes>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
