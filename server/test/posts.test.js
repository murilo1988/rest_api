const axios = require('axios');
const crypto = require('crypto');
const postService = require('../service/postsService');

const generate = function () {
	return crypto.randomBytes(20).toString('hex');
};

test('Should get Posts', async () => {
	// given - dado que
	const post1 = await postService.savePosts({
		title: generate(),
		content: generate(),
	});
	const post2 = await postService.savePosts({
		title: generate(),
		content: generate(),
	});
	const post3 = await postService.savePosts({
		title: generate(),
		content: generate(),
	});

	// when - quando acontecer
	const response = await axios({
		url: 'http://localhost:3000/posts',
		method: 'get',
	});
	const posts = response.data;

	// then - então
	expect(posts).toHaveLength(3);
	await postService.deletePosts(post1.id);
	await postService.deletePosts(post2.id);
	await postService.deletePosts(post3.id);
});
