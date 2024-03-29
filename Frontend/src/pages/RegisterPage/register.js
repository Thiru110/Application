import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { InputLabel, MenuItem, Select } from "@mui/material";
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
      data.RoleId = 2;
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
              //   marginTop={8}
              type="password"
              variant="outlined"
              label="Password"
              name="Password"
              {...register("Password")}
              sx={{ width: "300px", height: "100px", marginBottom: "10px" }}
            />

            <InputLabel id="SelectRole">Role</InputLabel>
            <Select
              id="SelectRole"
              name="SelectRole"
              sx={{ width: "300px", height: "100px", marginBottom: "10px" }}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Employee">Employee</MenuItem>
            </Select>

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