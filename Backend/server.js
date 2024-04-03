const express = require("express");
const db = require("./app/node-mysql-server/db-con");
const app = express();
const bcrypt = require("bcryptjs");
const port = 8000;

// *  IN THIS LINE CORS IS USED TO PASS THE DATA TO REACT
const cors = require("cors");
const { hash } = require("bcrypt");
app.use(cors());

// *  THIS IS IMPORTANT ONE FOR API CATCH
app.use(express.json());

// !  LOGIN VALIDATION
app.post("/user/login", (req, res) => {
  const sql = "SELECT * FROM appuser WHERE Email=?";
  const user = req.body.Email;
  db.query(sql, user, (err, data) => {
    if (err) return res.json({ Error: "Login error in server" });
    if (data.length > 0) {
      bcrypt.compare(
        req.body.Password.toString(),
        data[0].Password,
        (err, response) => {
          if (err) return res.json({ Error: "Password miss match error" });
          if (response) return res.json({ Status: "Success" });
          else {
            return res.json({ Error: "password incorrect" });
          }
        }
      );
    } else {
      return res.json({ Error: "No email existed" });
    }
  });
});

// !  FETCH ALL
app.get("/user/fetch", (req, res) => {
  const sql = "SELECT * FROM appuser";
  db.query(sql, (err, data) => {
    if (err) return res.json({ error: err.message });
    return res.json(data);
  });
});

// ! REGISTER DATA WITH HASHED PASSWORD
app.post("/user/create", (req, res) => {
  const sql = "INSERT INTO appuser (Email, Password, RoleId) VALUES (?, ?, ?)";
  const { Email, RoleId } = req.body;
  const salt = 10;
  bcrypt.hash(req.body.Password.toString(), salt, (err, hash) => {
    if (err) {
      return res.json({ error: "Error hashing password" });
    }

    // Construct the values array correctly to match the SQL placeholders.
    const values = [Email, hash, RoleId];

    db.query(sql, values, (err) => {
      if (err) {
        return res.json({ error: "Error executing SQL query", details: err });
      }
      return res.send("You have registered successfully");
    });
  });
});

//create statement
// app.post("/user/create", (req, res) => {
//   // execute query
//   const sql = "INSERT INTO appuser(Email, Password, RoleId) VALUES (?,?,?)";
//   const user = {
//     Email: req.body.Email,
//     // Password: req.body.Password,
//     hash,
//     RoleId: req.body.RoleId,
//   };
//   bcrypt.hash(req.body.Password.toString(), salt, (err, hash) => {
//     if (err) return res.json({ error: "error for hashing password" });

//     db.query(sql, [user], (err) => {
//       if (err) return res.json(err);
//       return res.send("You have registerd successfully");
//     });
//   });
// });

// ! DEFAULT ROUTE PATH
app.get("/", (req, res) => {
  res.send({ message: "Welcome to our ATTENDANCE MANAGE APP" });
});
// require("./app/routes/routes")(app);

// !  REMOVE ALL THE DATA FROM THE DATABASE
app.delete("/user/clear", (req, res) => {
  const sql = "TRUNCATE TABLE appuser";

  db.query(sql, (err) => {
    if (err) return res.json({ message: "Error on clear all datas" });
    return res.json({ message: "cleared successfully" });
  });
});
// !  listen for requests
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
