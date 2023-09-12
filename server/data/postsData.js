const { executeQuery } = require('../infra/dbOperations');

exports.getPosts = async function () {
	const sql = 'select * from posts';
	const [data] = await executeQuery(sql);
	return data;
};

exports.savePosts = async function (post) {
	const sql = 'INSERT INTO posts (title, content) VALUES (?, ?)';
	const values = [post.title, post.content];
	const [data] = await executeQuery(sql, values);
	return data;
};
exports.deletePosts = async function (id) {
	const sql = 'DELETE FROM posts WHERE id = ? ';
	const values = [id];
	const [data] = await executeQuery(sql, values);
	return data;
};
