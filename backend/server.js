const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host      : "localhost",
  user      : "root",
  password  : "Applerope123!",
  database  : "torogrub"
})




app.listen(port, (req, res) => {
    console.log(`Server is listening on port: ${port}`);
})

app.post("/signup", (req, res) => {
  const q = "SELECT * FROM user_t WHERE user_email = ? AND user_name = ? AND user_pwd = ?";

  db.query(q, [req.body.username, req.body.password, req.body.email], (err, data) => {
    console.log(req.body);
    if (!err) {

        const newQ = "INSERT INTO user_t (`user_name`,`user_pwd`, `user_email`) VALUES (?)";
        const values = 
        [
          req.body.username,
          req.body.password,
          req.body.email,
        ]
        db.query(newQ, [values], (err, data) => {
          if (err) return res.json(err);
          
        })

      return res.json(data.body)
    }

    return res.json("Sign Up Failed");
  })

})
