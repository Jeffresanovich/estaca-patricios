//Styles
import { Grid, Stack } from "@mui/material";

//Custom Hook
import useGetAppointmentData from "../../hook/useGetAppointmentData";

//Redux
import { useSelector } from "react-redux";

import Hours from "./Hours";
import Order from "./Order";

const Times = () => {
  const { data } = useGetAppointmentData();
  const time = useSelector((state) => state.appointmentSlice.time);

  return (
    <Stack
      spacing={0}
      sx={{
        p: 3,
        alignItems: "center",
      }}
    >
      <Grid container spacing={3}>
        {!time ? (
          data?.map((element, index) => (
            <Hours key={index} element={element} index={index} />
          ))
        ) : (
          <Order />
        )}
      </Grid>
    </Stack>
  );
};

export default Times;
