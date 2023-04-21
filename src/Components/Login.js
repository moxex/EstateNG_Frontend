import React from "react";
import { useNavigate } from "react-router-dom";

// MUI Imports
import {
  Grid,
  AppBar,
  Typography,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CircularProgress,
  TextField,
} from "@mui/material";

function Login() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "3rem",
        border: "5px solid black",
        padding: "3rem",
      }}
    >
      <form>
        <Grid item container justifyContent="center">
          <Typography variant="h4">SIGN IN</Typography>
        </Grid>

        <Grid item container style={{ marginTop: "1rem" }}>
          <TextField id="email" label="Email" variant="outlined" fullWidth />
        </Grid>

        <Grid item container style={{ marginTop: "1rem" }}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid
          item
          container
          xs={8}
          style={{ marginTop: "1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <Button
            variant="contained"
            fullWidth
            type="submit"
            style={{
              backgroundColor: "#ff6c38",
              color: "white",
              fontSize: "1.1rem",
              marginLeft: "1rem",
              // "&:hover": {
              // 	backgroundColor: "blue",
              // },
            }}
          >
            SIGN IN
          </Button>
        </Grid>
      </form>

      <Grid
        item
        container
        justifyContent="center"
        style={{ marginTop: "1rem" }}
      >
        <Typography variant="small">
          Don't have an account yet?{" "}
          <span
            onClick={() => navigate("/register")}
            style={{ cursor: "pointer", color: "#ff6c38" }}
          >
            SIGN UP
          </span>
        </Typography>
      </Grid>
    </div>
  );
}

export default Login;
