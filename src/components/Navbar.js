import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles } from "@mui/material";
import { Link } from "react-router-dom"

export default function Navbar(){

    return(
    <AppBar>
    <ul>
      <li><Link to="/">Home</Link> </li>
      <li><Link to="/Contact">Contact</Link></li>
      <li><Link to="/Punnett">Punnett</Link></li>
      <li><Link to="/Login">Login</Link> </li>
      <li><Link to="/Signup">Signup</Link> </li>
      <li><Link to="/Square">Square</Link></li>
    </ul>
  </AppBar>
    )
}