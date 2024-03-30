import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"red"}
        flexDirection={"column"}
      >
        Main page work in progress....
        <Box>
          <Link to={"/"}>goto Login</Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Main;
