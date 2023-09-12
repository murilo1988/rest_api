const mysql = require('mysql2/promise');

async function main() {
	const db = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'mysql',
		database: 'blog',
	});

	try {
		await db.connect();
		console.log('Conexão com banco de dados estabelicida');
		return db;
	} catch (err) {
		console.log('Erro ao conectar ao banco de dados', err);
		throw err;
	}
}

module.exports = main;
