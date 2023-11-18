//Styles
import { CssBaseline, Grid, Paper } from "@mui/material";

//Components
import Title from "../components/appointment/Title";
import Times from "../components/appointment/Times";
import Register from "../components/appointment/Register";
import Copyright from "../components/Copyright";

//Redux
import { useSelector } from "react-redux";

const Appointment = () => {
  const showRegister = useSelector((state) => state.appointmentSlice.show);

  return (
    <Grid container component='main' sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid item xs={12} sm={8} md={5}>
        <Title />
        {showRegister ? <Register /> : <Times />}
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default Appointment;
