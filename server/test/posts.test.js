const axios = require('axios');
const crypto = require('crypto');
const postService = require('../service/postsService');

const generate = function () {
	return crypto.randomBytes(20).toString('hex');
};

test('Should get Posts', async function () {
	// given - dado que
	const post1 = postService.savePost({
		title: generate(),
		content: generate(),
	});
	const post2 = postService.savePost({
		title: generate(),
		content: generate(),
	});
	const post3 = postService.savePost({
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

	// const [firstPost] = posts;
	// expect(firstPost.id).toBe(1);
	// expect(firstPost.title).toBe('REST_API :métodos');
});
