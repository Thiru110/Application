import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { MenuItem, Select } from "@mui/material";
import api from "../../HTTPHandler/api";

import "../LoginPage/login.css";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createUser(data);
    console.log(data);
  };
  const createUser = async (data) => {
    try {
      const response = await api.post("/user/create", data);
      window.alert(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            display={"flex"}
            height={350}
            flexDirection={"column"}
            maxWidth={400}
            justifyContent={"center"}
            alignItems={"center"}
            margin={"auto"}
            padding={5}
            borderRadius={9}
            boxShadow={"8px 8px 15px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "15px 15px 30px #ccc",
              },
            }}
          >
            {/* adding text on the browser */}
            <Typography variant="h3" padding={3} textAlign={"center"}>
              Register
            </Typography>

            <TextField
              type="text"
              variant="outlined"
              label="Email"
              name="Email"
              {...register("Email")}
              sx={{ width: "300px", height: "100px", marginBottom: "10px" }}
            />

            <TextField
              type="password"
              variant="outlined"
              label="Password"
              name="Password"
              {...register("Password")}
              sx={{ width: "300px", height: "100px", marginBottom: "10px" }}
            />

            <Select
              variant="standard"
              label="RoleId"
              name="RoleId"
              {...register("RoleId")}
              sx={{ width: "300px", height: "100px", marginBottom: "10px" }}
            >
              <MenuItem value="1">Admin</MenuItem>
              <MenuItem value="2">Employee</MenuItem>
            </Select>
            {/* <InputLabel id="SelectRole">Role</InputLabel>
            <Select
              id="SelectRole"
              label="RoleId"
              name="SelectRole"
              {...register("RoleId")}
              sx={{ width: "300px", height: "100px", marginBottom: "10px" }}
            >
              <MenuItem value="1">Admin</MenuItem>
              <MenuItem value="2">Employee</MenuItem>
            </Select> */}

            {/* Link is used in react router dom in app.js  */}
            <Button
              sx={{ marginTop: 3, borderRadius: 5 }}
              size="large"
              variant="contained"
              color="success"
              type="submit"
            >
              Register
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
}
