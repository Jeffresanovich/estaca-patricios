import React from "react";

//Styles
import { Box, Typography } from "@mui/material";

//Redux
import { useSelector } from "react-redux";

const Title = () => {
  const time = useSelector((state) => state.appointmentSlice.time);
  const order = useSelector((state) => state.appointmentSlice.order);
  const show = useSelector((state) => state.appointmentSlice.show);

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component='h1' variant='h3'>
        DONACION DE SANGRE
      </Typography>
    </Box>
  );
};

export default Title;
