var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
	connection = mysql.createConnection({
	host: 'm7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'gnxxrzeah8xq74yj',
	password:'ef6jf25hvx5djk9z',
	database: 'fpppvuhr8m0ftht6'
	})
}

// var connection = mysql.createConnection({
// 	port: 3306,
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'CARmex0711',
// 	database: 'burgers_db'
// });

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Connection Sucessful! and connected as id ' + connection.threadId);
});

module.exports = connection;