const postData = require('../data/postsData');

exports.getPosts = function () {
	return postData.getPosts();
};
exports.savePost = function (post) {
	return postData.savePost(post);
};
