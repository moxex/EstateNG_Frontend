import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

// MUI Imports
import { Button, Typography, AppBar, Toolbar } from "@mui/material";


function Header() {
    const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ backgroundColor: "#87CEEB" }}>
      <Toolbar>
        <div style={{ marginRight: "auto" }}>
          <Button
            color="inherit"
            onClick={() => navigate("/")}
            sx={{ color: "#000000" }}
          >
            <Typography variant="h4">EstateNG</Typography>{" "}
          </Button>
        </div>
        <div>
          <Button
            color="inherit"
            onClick={() => navigate("/listings")}
            sx={{ marginRight: "2rem", color: "#000000" }}
          >
            <Typography variant="h6">Listings</Typography>{" "}
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate("/agencies")}
            sx={{ marginLeft: "2rem", color: "#000000" }}
          >
            <Typography variant="h6">Agencies</Typography>{" "}
          </Button>
        </div>
        <div style={{ marginLeft: "auto", marginRight: "10rem" }}>
          <Button
            onClick={() => navigate("/addproperty")}
            sx={{
              backgroundColor: "#000000",
              color: "white",
              width: "15rem",
              fontSize: "1.1rem",
              marginRight: "1rem",
              "&:hover": {
                backgroundColor: "blue",
              },
            }}
          >
            Add Property
          </Button>
          <Button
            onClick={() => navigate("/login")}
            sx={{
              backgroundColor: "#ff6c38",
              color: "black",
              width: "15rem",
              fontSize: "1.1rem",
              marginLeft: "1rem",
              "&:hover": {
                backgroundColor: "#ffffff",
              },
            }}
          >
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
