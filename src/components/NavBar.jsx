import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Inicio", navTo: "/" },
  //{ name: "Noticias", navTo: "" },
  //{ name: "Donación", navTo: "DonacionSangre" },
];

const NavBar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component='nav' sx={{ background: "rgba(0, 0, 0, 0.5)" }}>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              color: "#fff",
              display: "flex",
              justifyContent: "initial",
              alignItems: "center",
            }}
          >
            <HomeRoundedIcon sx={{ fontSize: 30, marginRight: 2 }} />
            <NavLink to='/' end>
              ESTACA PATRICIOS
            </NavLink>
          </Typography>
          <Box>
            {/*

            {navItems.map((item, index) => (
              <NavLink key={index} to={item.navTo}>
                <Button sx={{ color: "#fff" }}>{item.name}</Button>
              </NavLink>
            ))}
              */}
          </Box>

          <NavLink
            to='/InicioSesion'
            /*
            style={({ isActive }) => {
              return {
                display: isActive ? "none" : "block",
              };
            }}
            */
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingX: 3,
                fontSize: 15,
              }}
            >
              <PersonSharpIcon sx={{ fontSize: 30 }} />
            </Box>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
