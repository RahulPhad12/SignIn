import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ display: "inline-flex", flexDirection: "row", mt: 3 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "#fff", color: "black" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ pl: 12 }}>
            <img src={logo} alt="brand" height={35} />
          </Typography>
          <Link
            to="/"
            className="nav-item"
            sx={{ pl: 70, pr: 5, fontWeight: "600" }}
          >
            Home
          </Link>
          <Link className="nav-item" sx={{ pr: 5, fontWeight: "600" }}>
            What we do
          </Link>
          <Link className="nav-item" sx={{ pr: 5, fontWeight: "600" }}>
            Feature
          </Link>
          {/* <button className='btn'>Log In</button> */}
          <Link to="/sign" className="nav-item">
            Sign in{" "}
          </Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="/login" className="nav-item">
            Log in{" "}
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
