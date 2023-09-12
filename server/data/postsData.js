const db = require('../infra/database.js');

exports.getPosts = async function () {
	try {
		const connection = await db();
		const data = await connection.query('SELECT * FROM posts');
		console.log(data);
		return data;
	} catch (err) {
		console.error('Erro ao executar consulta', err.message);
		throw err;
	}
};
