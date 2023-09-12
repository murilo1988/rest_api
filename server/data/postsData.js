const { connect } = require('../infra/database.js');

exports.getPosts = async function () {
	const [data] = await connect('select * from posts');
	return data;
};

exports.savePosts = async function () {
	await connect('insert');
};
