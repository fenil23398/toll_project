var mysql = require('mysql');
var cnn = mysql.createPool({
    host:'db4free.net',
    user:'se_team_2',
    password:'nopassword1234',
    database:'toll_collection1'
});

module.exports = cnn;

