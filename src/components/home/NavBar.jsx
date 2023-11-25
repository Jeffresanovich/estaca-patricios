import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Link } from "react-router-dom";

const MenuAppBar = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label='disabled tabs example'
    >
      <Link to='Home'>
        <Tab label='Inicio' />
      </Link>
      <Link to='BloodDonation'>
        <Tab label='Donacion' />
      </Link>
      <Tab label='Disabled' disabled />
    </Tabs>
  );
};

export default MenuAppBar;
