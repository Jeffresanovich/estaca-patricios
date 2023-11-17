import React from "react";
import { Grid } from "@mui/material";
const Header = () => {
  return (
    <Grid container border={5}>
      <Grid item border={1}>
        <img
          src='https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/1366_2000.jpg'
          alt='Descripción de la imagen'
        />
      </Grid>
      <Grid item border={1}>
        Texto 1
      </Grid>
      <Grid item border={1}>
        Texto 2
      </Grid>
      <Grid item border={1}>
        Texto 3
      </Grid>
      <Grid item border={1}>
        Nada
      </Grid>
    </Grid>
  );
};

export default Header;
