const { connectDatabase } = require('./dbConnection');

async function executeQuery(sql, values) {
	const database = await connectDatabase();
	try {
		const data = database.query(sql, values);
		return data;
	} catch (error) {
		console.log('Erro ao executar query', error);
	} finally {
		await database.end();
	}
}

module.exports = { executeQuery };
