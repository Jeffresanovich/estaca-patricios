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
  const { data } = useGetAppointmentData();

  const dispatch = useDispatch();
  const time = useSelector((state) => state.appointmentSlice.time);
  const timeId = useSelector((state) => state.appointmentSlice.timeId);

  const [patchAppointment] = usePatchAppointmentMutation();

  const handleTime = (index) => {
    dispatch(setTime(data[index]));
    dispatch(setTimeId(index));
  };

  const handleOrder = (index) => {
    dispatch(setOrder(index));
    patchAppointment([timeId, index, { isReserved: true }]);
  };

  const styles = {
    box: {
      transition: "width 0.3s, height 0.3s", // Añadir transición suave
      "&:hover": {
        //"box-shadow": "0 0 15px rgba(0, 0, 0, 0.5)",
        transform: "scale(2)",
      },
    },
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        p: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component='h3' variant='h5'>
        Turnos disponibles:
      </Typography>
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          {!time ? (
            data?.map((element, index) => (
              <Grid key={index} item xs={3} sm={3}>
                <Typography
                  component='h1'
                  variant='h5'
                  textAlign={"center"}
                  sx={styles.box}
                  onClick={() => handleTime(index)}
                  //border={2}
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
              {time.appointment?.map((element, index) => (
                <Grid key={index} item xs={3} sm={3}>
                  <Typography
                    component='h1'
                    variant='h5'
                    textAlign={"center"}
                    sx={!element.isReserved && styles.box}
                    onClick={() => handleOrder(index)}
                  >
                    {index + 1}
                    <p>{element.isReserved && "Ocupado"}</p>
                  </Typography>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Times;
