import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import { backgroundImg } from "./components/constant";
import AuthWrapper from './auth.style.js'

const Login = (props) => {
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <AuthWrapper>
      <Grid container
        direction="row"
        // alignItems="center"
        >
        <img className="side-img" src={backgroundImg} alt="bg" />
        <Box
          sx={{
            width: 550,
            maxWidth: '100%',
          }}
          className="center-items"
        >
        <Grid item className="header-section">
          <Typography className="mr-20 acc-text">Already have an account?</Typography>
          <Button className="login-button" onClick={() => history.push("/login")}>Login</Button>
        </Grid>
        <form onSubmit={handleRegister} className="form">
          <Grid> 
            <Grid className="mb-25">
            <span className="account-label">Create an Account</span>
            </Grid>
            <Grid>
              <FormControl fullWidth>
                <TextField
                  className="mb-25"
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl fullWidth>
                <TextField
                  className="mb-25"
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword} fullWidth>
                <TextField
                  className="mb-25"
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword} fullWidth>
                <TextField
                  className="mb-25"
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid className="text-center mt-10">
            <Button className="button" type="submit" variant="contained" size="large">
              Create
            </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
    </AuthWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
