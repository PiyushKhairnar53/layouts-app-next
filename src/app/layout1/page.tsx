"use client";
import Header from "../components/header";
import Drawer from "../components/drawer";
import { Box } from "@mui/material";
import { useState } from "react";

export default function Layout1() {
  const [showDrawer, setShowDrawer] = useState(false);
  function handleDrawerClick() {
    setShowDrawer(!showDrawer);
  }
  return (
    <Box sx={{ display: "flex,", width: "100%" }}>
      <Header onDrawerClick={handleDrawerClick} />
      <Drawer showDrawer={showDrawer} onDrawerClose={handleDrawerClick} />
    </Box>
  );
}
