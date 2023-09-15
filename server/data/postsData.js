const { executeQuery } = require('../infra/dbOperations');

exports.getPosts = async function () {
	const sql = 'select * from posts';
	const data = await executeQuery(sql);
	return data;
};

exports.savePosts = async function (post) {
	const insertSql = 'INSERT INTO posts (title, content) VALUES (?, ?)';
	const values = [post.title, post.content];

	// Execute a inserção no banco de dados
	const insertPost = await executeQuery(insertSql, values);

	// Obtenha o ID do post inserido
	const postId = insertPost.insertId;
	const selectPostId = [postId];

	// Agora, obtenha os dados do post com base no ID
	const selectSql = 'SELECT * FROM posts WHERE id = ?';
	const [createdPost] = await executeQuery(selectSql, selectPostId);

	return createdPost;
};

exports.deletePosts = async function (id) {
	await executeQuery('DELETE FROM blog.posts WHERE id = ?', [id]);
};
