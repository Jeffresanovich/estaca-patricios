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

  const styles = {
    box: {
      color: "grey",
      paddingY: 2,
      transition: "width 0.3s, height 0.3s", // Añadir transición suave
      "&:hover": {
        "box-shadow": "0 0 15px rgba(0, 0, 0, 0.5)",
        transform: "scale(1.5)",
        color: "black",
      },
    },
    boxDisable: {
      color: "white",
      paddingY: 2,
      background: "grey",
    },
  };

  return (
    <Stack
      spacing={4}
      sx={{
        p: 5,
        alignItems: "center",
      }}
    >
      <Typography component='h3' variant='h5'>
        Seleccione un horario:
      </Typography>
      {/* Este "spacing={3}" hace que la grid se desface */}
      <Grid container spacing={3}>
        {!time ? (
          data?.map((element, index) => (
            <Grid item key={index} paddingX={3} xs={6} sm={6} md={4}>
              <Typography
                component='h1'
                variant='h5'
                textAlign={"center"}
                sx={styles.box}
                onClick={() => handleTime(index)}
              >
                {element.time}
              </Typography>
            </Grid>
          ))
        ) : (
          <>
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
            {time.order?.map((element, index) => (
              <Grid key={index} item xs={3} sm={3}>
                <Typography
                  component='h1'
                  variant='h3'
                  textAlign={"center"}
                  sx={element.isReserved ? styles.boxDisable : styles.box}
                  onClick={() => handleOrder(element, index)}
                >
                  {index + 1}
                </Typography>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Stack>
  );
};

export default Times;
