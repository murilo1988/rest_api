const mysql = require('mysql2')();

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'mysql',
	database: 'blog',
});

dn.connect((err) => {
	if (err) {
		console.log('Erro ao conectar o banco de dados');
	} else {
		console.log('Conexão com banco de dados estabelicida');
	}
});

module.exports = db;
