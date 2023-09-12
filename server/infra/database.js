const mysql = require('mysql2/promise');

async function dbConnection() {
	const database = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'mysql',
		database: 'blog',
	});
	try {
		await database.connect();
		console.log('Conexão com banco de dados estabelicida');
		return database;
	} catch (err) {
		console.log('Erro ao conectar ao banco de dados', err);
		throw err;
	}
}

module.exports = dbConnection;
