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

/*
const navItems = [
  { name: "Inicio", navTo: "/" },
  { name: "Noticias", navTo: "" },
  { name: "Perfil", navTo: "" },
];
*/

const NavBar = ({ navPosition, navItems }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position='static' sx={{ background: "rgba(0, 0, 0, 0.5)" }}>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "initial",
              alignItems: "center",
              color: "#fff",
              display: "flex",
            }}
          >
            <NavLink to='/' end>
              <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "initial",
                  alignItems: "center",
                }}
              >
                <HomeRoundedIcon sx={{ fontSize: 30, marginRight: 2 }} />
              </Box>
            </NavLink>
            <Typography
              variant='h6'
              component='div'
              color='#fff'
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              ESTACA PATRICIOS
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            {navItems?.map((item, index) => (
              <NavLink key={index} to={item.navTo}>
                <Button sx={{ color: "#fff" }}>{item.name}</Button>
              </NavLink>
            ))}
          </Box>

          <NavLink to='/InicioSesion'>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
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
