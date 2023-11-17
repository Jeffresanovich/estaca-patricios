import * as React from "react";

//Styles
import {
  Grid,
  Box,
  MenuItem,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

import { useGetAllWardQuery } from "../../services/patriciosStakeApi";

import { usePatchAppointmentMutation } from "../../services/patriciosStakeApi";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { cleanAppointment } from "../../redux/slice/appointmentSlice";

const Register = () => {
  const { data: wards, isLoading } = useGetAllWardQuery();

  const [patchAppointment] = usePatchAppointmentMutation();
  const time = useSelector((state) => state.appointmentSlice.time);
  const order = useSelector((state) => state.appointmentSlice.order);

  const dispatch = useDispatch();

  const [selectWard, setSelectWard] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const form = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      ward: data.get("ward"),
      phone: data.get("phone"),
      dni: data.get("dni"),
      isReserved: true,
    };

    patchAppointment([time, order, form]);

    console.log(form, time, order);
    //alert("LOGICA PARA REGISTRAR AL DONANTE");
  };

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
      <Typography component='h3' variant='h5'>
        Datos del donante:
      </Typography>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ my: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='given-name'
              name='firstName'
              required
              fullWidth
              id='firstName'
              label='Nombre'
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id='lastName'
              label='Apellido'
              name='lastName'
              autoComplete='family-name'
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              required
              fullWidth
              id='ward'
              name='ward'
              label='Unidad'
              value={selectWard}
              onChange={(event) => setSelectWard(event.target.value)}
            >
              {isLoading ? (
                <CircularProgress />
              ) : (
                wards.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))
              )}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id='phone'
              label='Telefono'
              name='phone'
              autoComplete='family-name'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id='dni'
              label='DNI'
              name='dni'
              autoComplete='family-name'
            />
          </Grid>
        </Grid>
        <Grid container justifyContent={"space-around"} sx={{ my: 3 }}>
          <Grid item>
            <Button
              type='submit'
              variant='contained'
              size='large'
              sx={{ mt: 3, mb: 2, width: 200 }}
            >
              Registrar turno
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant='contained'
              color='error'
              size='large'
              sx={{
                mt: 3,
                mb: 2,
                width: 200,
              }}
              onClick={() => dispatch(cleanAppointment())}
            >
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Register;