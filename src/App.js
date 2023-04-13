import { margin } from "@mui/system";
import React from "react";
import Navigation from "./Components/Navigation";
import Test from "./Components/Test";
import { Box } from "@mui/system";
import { useState } from "react";

export default function App() {
  return (
    <Box sx={{ m: 0, p: 0 }}>
      <Test />
      {/* <Navigation  /> */}
    </Box>
  );
}
