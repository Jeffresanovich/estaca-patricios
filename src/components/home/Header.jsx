import React from "react";
import { Box, Button, CssBaseline, Grid, Typography } from "@mui/material";
import Copyright from "../Copyright";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <CssBaseline>
      <Grid
        container
        component='main'
        sx={{
          backgroundImage:
            "url(https://content.churchofjesuschrist.org/acp/bc/Caribe%20Area/Caribe%20Area/2023/Events/Sigue-A-Jesucrito/1200x675/jesus-christ.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            component='h1'
            variant='h1'
            fontFamily={"monospace"}
            color='white'
          ></Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            marginX: 10,
            marginTop: 40,
          }}
        >
          <Button
            variant='outlined'
            color='warning'
            sx={{ background: "rgba(251, 97, 7, 0.7)", padding: 2 }}
          >
            <Link to='/DonacionSangre'>
              Ir al registro de Donacion de Sangre
            </Link>
          </Button>
        </Grid>
      </Grid>
    </CssBaseline>
  );
};

export default Header;
