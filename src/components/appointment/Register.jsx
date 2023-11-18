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
  Alert,
} from "@mui/material";

import {
  useGetAllAppointmentQuery,
  useGetAllWardQuery,
} from "../../services/patriciosStakeApi";

import { usePatchAppointmentMutation } from "../../services/patriciosStakeApi";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { cleanAppointment } from "../../redux/slice/appointmentSlice";

const Register = () => {
  const { data: wards, isLoading } = useGetAllWardQuery();
  const { refetch } = useGetAllAppointmentQuery();

  const [patchAppointment] = usePatchAppointmentMutation();
  const time = useSelector((state) => state.appointmentSlice.time);
  const timeId = useSelector((state) => state.appointmentSlice.timeId);
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

    patchAppointment([timeId, order, form]);

    alert("Turno registrado con exito");
    dispatch(cleanAppointment());
    refetch();
  };

  const handleCancel = () => {
    dispatch(cleanAppointment());
    patchAppointment([timeId, order, { isReserved: false }]);
    alert("Turno cancelado con exito");
    refetch();
  };

  return (
    <Box
      sx={{
        my: 4,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {order && (
        <Alert severity='info' mt={5}>
          Usted se esta registrando al turno {order + 1} de las {time.time}
        </Alert>
      )}
      <Typography component='h3' variant='h5'>
        Datos del donante:
      </Typography>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ my: 4 }}>
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
                wards.map((ward, index) => (
                  <MenuItem key={index} value={ward}>
                    {ward}
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
              onClick={() => handleCancel()}
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
