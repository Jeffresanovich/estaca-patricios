//Styles
import { Grid, Box, Typography, Paper, Alert } from "@mui/material";

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

  const handleOrder = (index) => {
    dispatch(setOrder(index));
    patchAppointment([timeId, index, { isReserved: true }]);
    refetch();
  };

  const styles = {
    box: {
      /* transition: "width 0.3s, height 0.3s", // Añadir transición suave
      "&:hover": {
        //"box-shadow": "0 0 15px rgba(0, 0, 0, 0.5)",
        transform: "scale(2)",
      },*/
    },
  };

  return (
    <Box
      sx={{
        my: 10,
        mx: 5,
        px: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      border={2}
    >
      <Typography component='h3' variant='h5' sx={{ my: 1 }}>
        Turnos disponibles:
      </Typography>

      <Grid container spacing={3} border={2} sx={{ my: 4 }}>
        {!time ? (
          data?.map((element, index) => (
            <Grid key={index} item xs={4} sm={4}>
              <Typography
                component='h1'
                variant='h5'
                textAlign={"center"}
                sx={styles.box}
                onClick={() => handleTime(index)}
                border={2}
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
                  variant='h5'
                  textAlign={"center"}
                  sx={styles.box}
                  onClick={() => handleOrder(index)}
                >
                  {index + 1}
                </Typography>
                <h1>{element.isReserved && "Ocupado"}</h1>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default Times;
