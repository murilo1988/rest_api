const databaseConnection = require('../infra/database.js');

exports.getPosts = async function () {
	try {
		const database = await databaseConnection();
		const [data] = await database.query('SELECT * FROM posts');
		return data;
	} catch (err) {
		console.error('Erro ao executar consulta', err.message);
		throw err;
	}
};
