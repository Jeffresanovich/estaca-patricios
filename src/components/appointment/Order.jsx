import React from "react";

//Styles
import { Button, Grid, Paper, Typography } from "@mui/material";

//Icon
import UndoIcon from "@mui/icons-material/Undo";

//Redux
import useGetAppointmentData from "../../hook/useGetAppointmentData";
import { useDispatch, useSelector } from "react-redux";
import { setTime, setOrder } from "../../redux/slice/appointmentSlice";
import { usePatchAppointmentMutation } from "../../services/patriciosStakeApi";

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

const Order = () => {
  const { refetch } = useGetAppointmentData();

  const dispatch = useDispatch();
  const time = useSelector((state) => state.appointmentSlice.time);
  const timeId = useSelector((state) => state.appointmentSlice.timeId);

  const [patchAppointment] = usePatchAppointmentMutation();

  const handleOrder = (element, index) => {
    if (element.isReserved) Alert("Horario no esta disponible");
    else {
      dispatch(setOrder(index));
      patchAppointment([timeId, index, { isReserved: true }]);
      refetch();
    }
  };

  return (
    <>
      <Grid
        item
        xs={12}
        sm={12}
        sx={{
          textAlign: "center",
          //display: "flex",
          //justifyContent: "center",
          //alignItems: "center",
        }}
      >
        <Button color='error' onClick={() => dispatch(setTime(null))}>
          <UndoIcon sx={{ fontSize: 100 }} />
        </Button>
        <Typography
          component='h1'
          variant='h1'
          sx={{ color: "rgba(186, 0, 1, 0.8)" }}
        >
          {time.time}
        </Typography>
      </Grid>
      {time.order?.map((element, index) => (
        <Grid item key={index} xs={12} sm={12} md={6} width={90}>
          <Paper
            variant='elevation'
            elevation={4}
            square={false}
            sx={element.isReserved ? styles.boxDisable : styles.box}
          >
            <Typography
              component='h1'
              variant='h1'
              textAlign='center'
              onClick={() => handleOrder(element, index)}
            >
              {index + 1}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default Order;
