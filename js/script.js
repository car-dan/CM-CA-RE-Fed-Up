const url = "https://www.danielrud.no/wp-json/wp/v2/posts";
const posts = document.querySelector(".posts");

(async function getPosts() {
	try {
		const response = await fetch(url);
		const json = await response.json();

		console.log(json);
		posts.innerHTML = "";
		let numberOfPosts = json.length;
		console.log(numberOfPosts);
		json.forEach((post) => {
			posts.innerHTML += `<div class = "post">
                                <h2>${post.title.rendered}</h2>
                                ${post.content.rendered}
                            </div>`;
		});
	} catch (error) {
		console.log(error);
	}
})();

function liveUpdate() {
	setInterval(async function () {
		numberOfPosts = document.querySelectorAll(".post").length;

		try {
			const response = await fetch(url);
			const json = await response.json();

			if (json.length != numberOfPosts) {
				location.reload();
			}
		} catch (error) {
			console.log(error);
		}
	}, 10000);
}

document.addEventListener("DOMContentLoaded", function () {
	liveUpdate();
});
