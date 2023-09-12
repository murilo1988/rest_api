const postData = require('../data/postsData');

exports.getPosts = function () {
	return postData.getPosts();
};
exports.savePosts = function (post) {
	return postData.savePosts(post);
};
exports.deletePosts = function (post) {
	return postData.deletePosts(post);
};
