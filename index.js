const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postContainer = document.getElementById("post-container");

post();

function post() {
  for (let i = 0; i < posts.length; i++) {
    let user = posts[i];
    const postElement = document.createElement("section");
    postElement.className = "post";

    postElement.innerHTML = `
    <div class="post-header">
      <img
        src="./${user.avatar}"
        alt="${user.name}"
        class="post-header-avatar"
      />
      <p class="post-header-username">
        <span class="user-name"><strong>${user.name}</strong></span>
        ${user.location}
      </p>
    </div>

    <img
      src="./${user.post}"
      alt=${user.post}
      class="post-image"
    />

    <div class="post-reactions">
      <img
        src="./images/icon-heart.png"
        alt="heart"
        class="like post-reactions-icon"
        id="${user.username}"
      />
      <img
        src="./images/icon-comment.png"
        alt="comment"
        class="comment post-reactions-icon"
      />
      <img
        src="./images/icon-dm.png"
        alt="share"
        class="share post-reactions-icon"
      />
    </div>

    <div class="post-likes">
      <strong id="user-likes${user.username}">${user.likes}</strong> likes
    </div>
    
    <div class="post-comments">
        <strong>${user.username}</strong>
        ${user.comment}
    </div>
    `;
    postContainer.appendChild(postElement);
    document
      .querySelector(`#${user.username}`)
      .addEventListener("click", () => {
        const currentLikes = document.querySelector(
          `#user-likes${user.username}`
        ).textContent;

        document.querySelector(`#user-likes${user.username}`).textContent =
          +currentLikes + 1;
      });
  }
}
