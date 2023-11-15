import * as React from "react";
import Container from "@mui/material/Container";

import LoginScreen from "./screens/LoginScreen";
import LandingScreen from "./screens/LandingScreen";

export default function App() {
  return (
    <Container maxWidth='sm'>
      <LandingScreen />
    </Container>
  );
}
