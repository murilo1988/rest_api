const mysql = require('mysql2/promise');

function connectDatabase() {
	try {
		const database = mysql.createConnection({
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

async function connect(sql) {
	const database = await connectDatabase();
	return database.query(sql);
}

module.exports = { connect };
