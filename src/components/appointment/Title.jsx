import React from "react";

//Styles
import { Alert, Box, Typography } from "@mui/material";

//Redux
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <Box
      sx={{
        my: 5,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component='h4' variant='h4'>
        DONACION DE SANGRE
      </Typography>
    </Box>
  );
};

export default Title;
