import React, { useState} from 'react'
import { Link } from 'react-router-dom'

// MUI Imports
import { Button, Typography, AppBar, Toolbar } from "@mui/material";

// Assets
import city from './Assets/city.jpg';


function Home() {
    const [btnColor, setBtnColor] = useState('error')
    return (
      <>
        <img src={city} alt="City" style={{ width: "100%", height: "92vh" }} />
        <div
          style={{
            position: "absolute",
            zIndex: "100",
            top: "100px",
            left: "50px",
            right: '50px',
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            WELCOME TO <span> EstateNG</span>
          </Typography>
          <Button
            variant="contained"
            style={{
              fontSize: "3.5rem",
              borderRadius: "15px",
              backgroundColor: "#ff6c38",
              marginTop: "2rem",
              boxShadow: "3px 3px 3px white",
            }}
          >
            ALL PROPERTIES
          </Button>
        </div>
      </>
    );
}

export default Home