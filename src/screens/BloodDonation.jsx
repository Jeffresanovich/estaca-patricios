//Styles
import { CssBaseline, Grid, Paper } from "@mui/material";

//Components
import Title from "../components/appointment/Title";
import Times from "../components/appointment/Times";
import Register from "../components/appointment/Register";
import Copyright from "../components/Copyright";
import NavBar from "../components/NavBar";

//Redux
import { useSelector } from "react-redux";

import imgDonacionSangre from "../assets/img/donacion-sangre.jpg";

const BloodDonation = () => {
  const showRegister = useSelector((state) => state.appointmentSlice.show);

  return (
    <>
      <NavBar />
      <Grid container component='main' /*sx={{ height: "100vh" }}*/>
        <CssBaseline />
        <Grid
          item
          //marginTop={10}
          xs={12}
          sm={7}
          md={7}
          sx={{
            backgroundImage: `url(${imgDonacionSangre})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: "300px", md: "100vh", sm: "100vh" },
          }}
        />

        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {showRegister ? <Register /> : <Times />}
        </Grid>
      </Grid>
    </>
  );
};

export default BloodDonation;
