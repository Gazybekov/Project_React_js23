import { Copyright, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useAuth } from "../context/AuthContextProvider";
const Auth = () => {
  const {
    email,
    password,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    setEmailError,
    setPasswordError,
    user,
    setUser,
    handleRegister,
    handleLogin,
    handleLogOut,
    hasAccount,
    setHasAccount,
  } = useAuth();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {hasAccount ? "Login Form" : "Register Now"}
        </Typography>
        <Box onSubmit={handleSubmit} noValidate component="form" sx={{ mt: 1 }}>
          <TextField
            label="Email Address"
            name="email"
            autoFocus
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            helperText={emailError}
            required
            fullWidth
            margin="normal"
          />

          <OutlinedInput
            autoComplete="current-password"
            id="outlined-adornment-password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            fullWidth
            required
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {hasAccount ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleRegister}
              sx={{ mt: 3, mb: 2 }}
            >
              Register Now
            </Button>
          )}
          <Grid container>
            <Grid item>
              <Typography
                variant="body2"
                onClick={() => setHasAccount(!hasAccount)}
                sx={{ cursor: "pointer", textDecoration: "underline" }}
              >
                {hasAccount
                  ? "Dont have an account? Register Now"
                  : "Already an account? Login"}
              </Typography>
            </Grid>
            <Copyright sx={{ mt: 0, mb: 4 }} />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Auth;
