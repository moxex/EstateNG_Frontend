import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Axios } from 'axios';


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

function Register() {
    const navigate = useNavigate();
    
    const [sendRequest, setSendRequest] = useState(false)
   
    function FormSubmit(e) {
        e.preventDefault();
        console.log('The form has been submitted');
        setSendRequest(!sendRequest)
    }

    useEffect(() => {
        if (sendRequest) {
          const source = Axios.CancelToken.source();
          async function SignUp() {
            try {
              const response = await Axios.post(
                "http://localhost:8000/apiv1-auth-djoser/users/",
                {
                  username: 'moses',
                  email: "testing123@gmail.com",
                  password: "test123",
                  re_password: "test123",
                },
                { cancelToken: source.token }
              );
              console.log(response);
            } catch (error) {
                console.log(error.response)
            }
          }
          SignUp();
          return () => {
            source.cancel();
          };
        }
    }, [sendRequest]);

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
      <form onSubmit={FormSubmit}>
        <Grid item container justifyContent="center">
          <Typography variant="h4">CREATE AN ACCOUNT</Typography>
        </Grid>

        <Grid item container style={{ marginTop: "1rem" }}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
          />
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

        <Grid item container style={{ marginTop: "1rem" }}>
          <TextField
            id="password2"
            label="Confirm Password"
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
            SIGN UP
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
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer", color: "#ff6c38" }}
          >
            SIGN IN
          </span>
        </Typography>
      </Grid>
    </div>
  );
}

export default Register