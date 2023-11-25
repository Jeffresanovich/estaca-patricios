//Styles
import { Grid, Box, Typography, Stack, Paper, Alert } from "@mui/material";

//Custom Hook
import useGetAppointmentData from "../../hook/useGetAppointmentData";

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  setTime,
  setOrder,
  setTimeId,
} from "../../redux/slice/appointmentSlice";

import { usePatchAppointmentMutation } from "../../services/patriciosStakeApi";

const Times = () => {
  const { data, refetch } = useGetAppointmentData();

  const dispatch = useDispatch();
  const time = useSelector((state) => state.appointmentSlice.time);
  const timeId = useSelector((state) => state.appointmentSlice.timeId);

  const [patchAppointment] = usePatchAppointmentMutation();

  const styles = {
    box: {
      margin: "auto",
      maxWidth: 400,
      transition: "box-shadow 0.3s ease-in-out", // Agrega transición a la sombra
      "&:hover": {
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", // Cambia la sombra al pasar el mouse
      },
    },
    boxDisable: {
      color: "white",
      paddingY: 2,
      background: "grey",
    },
  };

  const handleTime = (index) => {
    dispatch(setTime(data[index]));
    dispatch(setTimeId(index));
    refetch();
  };

  const handleOrder = (element, index) => {
    if (element.isReserved) Alert("Horario no esta disponible");
    else {
      dispatch(setOrder(index));
      patchAppointment([timeId, index, { isReserved: true }]);
      refetch();
    }
  };

  return (
    <Stack
      spacing={0}
      sx={{
        p: 3,
        alignItems: "center",
      }}
    >
      <Typography component='h3' variant='h2' marginTop={4}>
        TURNOS
      </Typography>
      {/* Este "spacing={3}" hace que la grid se desface */}
      <Grid container spacing={3}>
        {!time ? (
          data?.map((element, index) => (
            <Grid item key={index} xs={12} sm={12} md={6}>
              <Paper
                variant='elevation'
                elevation={4}
                square={false}
                className={styles.box}
              >
                <Typography
                  component='Paper'
                  variant='h1'
                  textAlign={"center"}
                  onClick={() => handleTime(index)}
                  //border={2}

                  height={140}
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
          ))
        ) : (
          <>
            {time.order?.map((element, index) => (
              <Grid key={index} item xs={3} sm={3}>
                <Typography
                  component='h1'
                  variant='h3'
                  textAlign={"center"}
                  sx={{}}
                  onClick={() => handleOrder(element, index)}
                >
                  {index + 1}
                </Typography>
              </Grid>
            ))}
            <Grid item xs={12} sm={12}>
              <Typography
                component='h1'
                variant='h1'
                textAlign={"center"}
                onClick={() => dispatch(setTime(null))}
              >
                {time.time}
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Stack>
  );
};

export default Times;
