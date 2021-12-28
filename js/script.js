const url = "https://www.danielrud.no/wp-json/wp/v2/posts";
const posts = document.querySelector(".posts");

async function getPosts() {
	const response = await fetch(url);
	const json = await response.json();

	console.log(json);
	posts.innerHTML = "";

	json.forEach((post) => {
		posts.innerHTML += `<div class = "post">
                                <h2>${post.title.rendered}</h2>
                                ${post.content.rendered}
                            </div>`;
	});
}

getPosts();
