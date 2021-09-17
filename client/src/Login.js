import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import { backgroundImg } from "./components/constant";
import AuthWrapper from "./auth.style";

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
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
      <Grid>
        <img className="side-img" src={backgroundImg} alt="bg" />
      </Grid>
      <Box
        sx={{
          width: 550,
          maxWidth: '100%',
        }}
        className="center-items"
      >
      <Grid className="header-section">
        <Typography className="mr-20 acc-text">Don’t have an account?</Typography>
        <Button className="signup-btn" onClick={() => history.push("/register")}>Create Account</Button>
      </Grid>
      <form onSubmit={handleLogin} className="form">
        <Grid> 
          <Grid className="mb-25">
          <span className="account-label">Welcome Back!</span>
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
          <FormControl fullWidth margin="normal" required>
            <TextField
              label="password"
              aria-label="password"
              type="password"
              name="password"
            />
          </FormControl>
          </Grid>
          <Grid className="text-center mt-10">
          <Button className="button" type="submit" variant="contained" size="large">
            Login
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
