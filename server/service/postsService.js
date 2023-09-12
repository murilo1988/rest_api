const database = require('../data/postsData');

exports.getPosts = async function () {
	return database.getPosts();
};
