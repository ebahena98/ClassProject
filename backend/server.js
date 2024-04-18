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



// app.post("/signup", (req, res) => {
//   // const q = "SELECT * FROM user_t WHERE user_email = ? AND user_name = ? AND user_pwd = ?";

//   const q = "INSERT INTO user_t (user_email, user_name, user_pwd) VALUES (?, ?, ?)"

//   db.query(q, [req.body.email, req.body.username, req.body.password], (err, data) => {

//     if (err) {
//       return res.json("Sign Up Failed");
//     }
    
//     console.log(data.body);
//     return res.json(data.body);
  
//   })
// })



app.post('/signup', (req, res) => {
  
  const q = "SELECT * FROM user_t WHERE user_email = ? ";

  db.query(q, req.body.email, (err, data) => {

    if (err) {
      console.log("NOT THE SAME EMAIL: " + err);

    } else {
      console.log("SAME EMAIL: " + res[0]);
    }

  })


})



// LISTENS TO A PORT 

app.listen(port, (req, res) => {
  console.log(`Server is listening on port: ${port}`);
})
