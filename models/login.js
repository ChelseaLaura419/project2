var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Cadiz3052!!",
  database: "combat_DB"
});

connection.connect(function(err) {
  if (err) throw err; 
  console.log("connected as id " + connection.threadId);
  createAccount();
});

function createAccount(answer) {
    var query = connection.query(
        "INSERT INTO information SET ?",
      {
        firstName: answer.inputFirstName,
        lastName: answer.inputLastName,
        email: answer.inputEmail,
        password: answer.inputPassword,
      },
    
connection.end()

    )};

