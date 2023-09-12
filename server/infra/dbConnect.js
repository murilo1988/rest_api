const mysql = require('mysql2/promise');

async function connectDatabase() {
	try {
		const database = await mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'mysql',
			database: 'blog',
		});
		console.log('Conexão com banco de dados estabelicida');
		return database;
	} catch (err) {
		console.log('Erro ao conectar ao banco de dados', err.message);
		throw err;
	}
}

module.exports = { connectDatabase };
