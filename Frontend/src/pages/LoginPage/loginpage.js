import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import api from "../../HTTPHandler/api";

export const Loginpage = () => {
  // ! USING USEFORM HOOK
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    userLogin(data);
    console.log(data);
  };

  const navigate = useNavigate();
  const userLogin = async (data) => {
    try {
      const response = await api.post("/user/login", data);
      if (response.data.Status === "Success") {
        navigate("/main");
        window.alert(response);
      } else {
        window.alert(response.data.Error);
      }
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
              Login
            </Typography>
            <TextField
              type="email"
              variant="outlined"
              label="Email"
              name="Email"
              {...register("Email")}
              sx={{ width: "300px", height: "100px", marginBottom: "10px" }}
            />

            <TextField
              marginTop={8}
              type="password"
              variant="outlined"
              label="Password"
              name="Password"
              {...register("Password")}
              sx={{ width: "300px", height: "100px" }}
            />

            {/* Link is used in react router dom in app.js  */}
            {/* <Link to="/main"> */}
            <Button
              sx={{ marginTop: 3, borderRadius: 5 }}
              size="large"
              variant="contained"
              color="success"
              type="submit"
            >
              Login
            </Button>
            {/* </Link> */}
            <Link to="/forgotpass">
              <Button
                type="submit"
                marginTop={"10px"}
                sx={{ marginTop: 3, borderRadius: 3 }}
              >
                Fogot password
              </Button>
            </Link>
          </Box>
        </form>
      </div>
    </div>
  );
};
