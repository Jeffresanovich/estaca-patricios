//Styles
import {
  Grid,
  Box,
  Typography,
  Stack,
  Paper,
  Alert,
  Button,
} from "@mui/material";

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

import UndoIcon from "@mui/icons-material/Undo";

const Times = () => {
  const { data, refetch } = useGetAppointmentData();

  const dispatch = useDispatch();
  const time = useSelector((state) => state.appointmentSlice.time);
  const timeId = useSelector((state) => state.appointmentSlice.timeId);

  const [patchAppointment] = usePatchAppointmentMutation();

  const styles = {
    box: {
      color: "white",
      background: "rgba(186, 0, 0, 0.6)",
      margin: "auto",
      maxWidth: 400,
      transition: "box-shadow 0.3s ease-in-out", // Agrega transición a la sombra
      "&:hover": {
        boxShadow: "5px 30px 30px 5px rgba(0,0,0,0.6)", // Cambia la sombra al pasar el mouse
        background: "rgba(186, 0, 0, 0.8)",
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
      <Typography component='h1' variant='h4' marginTop={5}></Typography>
      <Grid container spacing={3}>
        {!time ? (
          data?.map((element, index) => (
            <Grid item key={index} xs={12} sm={12} md={6} width={90}>
              <Paper
                variant='elevation'
                elevation={4}
                square={false}
                sx={styles.box}
              >
                <Typography
                  component='Paper'
                  variant='h1'
                  textAlign={"center"}
                  onClick={() => handleTime(index)}
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
                  sx={styles.box}
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
        )}
      </Grid>
    </Stack>
  );
};

export default Times;
