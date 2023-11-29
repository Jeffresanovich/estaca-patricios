import React from "react";

import { Grid, Paper, Typography } from "@mui/material";

import useGetAppointmentData from "../../hook/useGetAppointmentData";
import { useDispatch } from "react-redux";
import { setTime, setTimeId } from "../../redux/slice/appointmentSlice";

const styles = {
  box: {
    color: "rgba(186, 0, 0, 0.9)",
    background: "white",
    margin: "auto",
    maxWidth: 400,
    transition: "box-shadow 0.3s ease-in-out", // Agrega transición a la sombra
    "&:hover": {
      color: "white",
      boxShadow: "5px 30px 30px 5px rgba(0,0,0,0.6)", // Cambia la sombra al pasar el mouse
      background: "rgba(186, 0, 0, 0.9)",
    },
  },
  boxDisable: {
    color: "white",
    background: "rgba(186, 0, 0, 0.9)",
  },
};

const Hours = ({ element, index }) => {
  const { data, refetch } = useGetAppointmentData();

  const dispatch = useDispatch();

  const handleTime = (index) => {
    dispatch(setTime(data[index]));
    dispatch(setTimeId(index));
    refetch();
  };

  return (
    <Grid item xs={12} sm={12} md={6} width={90}>
      <Paper
        variant='elevation'
        elevation={4}
        square={false}
        sx={styles.box}
        width={100}
      >
        <Typography
          variant='h2'
          textAlign={"center"}
          onClick={() => handleTime(index)}
          height={100}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {element.time}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Hours;
