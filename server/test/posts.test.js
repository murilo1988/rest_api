const axios = require('axios');
const crypto = require('crypto');
const postService = require('../service/postsService');
// const { deletePosts } = require('../data/postsData');

const generate = function () {
	return crypto.randomBytes(20).toString('hex');
};

async function deleteAllPosts() {
	const posts = await postService.getPosts();
	for (const post of posts) {
		await postService.deletePosts(post.id);
	}
}
afterAll(async () => {
	await deleteAllPosts();
});

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
});
