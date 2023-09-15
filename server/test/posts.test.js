const axios = require('axios');
const crypto = require('crypto');
const postService = require('../service/postsService');
// const { deletePosts } = require('../data/postsData');

const generate = function () {
	return crypto.randomBytes(20).toString('hex');
};

const request = function (url, method, data) {
	return axios({ url, method, data });
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
	const response = await request('http://localhost:3000/posts', 'get');
	const posts = response.data;
	// then - então
	expect(posts).toHaveLength(3);
});

test('should save post', async function () {
	const data = { title: generate(), content: generate() };
	const response = await request('http://localhost:3000/posts', 'post', data);
	console.log(response.data);
	const post = response.data;
	console.log(post);
	expect(post.title).toBe(data.title);
	expect(post.content).toBe(data.content);
});
