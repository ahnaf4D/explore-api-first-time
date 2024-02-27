function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data));
}

function displayPost(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('border-2', 'p-4', 'bg-gray-400','rounded-xl');
        div.innerHTML = `
        <h4 class = "text-2xl font-bold text-white">User - ${post.id}</h4>
        <h5 class= "text-3xl font-bold text-white">Post Title : ${post.title}</h5>
        <p>
        Post Description
        ${post.body}
        </p>
        `
        postContainer.appendChild(div);
    }

}
loadPost()
// displayPost();