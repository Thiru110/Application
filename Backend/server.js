const express = require("express");
const db = require("./app/node-mysql-server/db-con");
const app = express();

const port = 8000;

// *  IN THIS LINE CORS IS USED TO PASS THE DATA TO REACT
const cors = require("cors");
app.use(cors());

// *  THIS IS IMPORTANT ONE FOR API CATCH
app.use(express.json());

// !  FETCH ALL
app.get("/user/fetch", (req, res) => {
  const sql = "SELECT * FROM appuser";
  db.query(sql, (err, data) => {
    if (err) return res.json({ error: err.message });
    return res.json(data);
  });
});

// ! INSERT
//create statement
app.post("/user/create", (req, res) => {
  const user = {
    Email: req.body.Email,
    Password: req.body.Password,
    RoleId: req.body.RoleId,
  };

  // execute query
  const sql = "INSERT INTO appuser set ?";
  db.query(sql, user, (err) => {
    if (err) return res.json(err);
    return res.send("You have registerd successfully");
  });
});

// ! DEFAULT ROUTE PATH
app.get("/", (req, res) => {
  res.send({ message: "Welcome to our ATTENDANCE MANAGE APP" });
});
// require("./app/routes/routes")(app);

// !  listen for requests
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
