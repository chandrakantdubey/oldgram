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

addPost();

function addPost() {
  for (let { user, index } of posts) {
    const postElement = document.createElement("section");
    postElement.className = "post";
    postElement.innerHTML = `
    <div class="post-header">
      <img
        src="./images/avatar-vangogh.jpg"
        alt="avatar-vangogh"
        class="post-header-avatar"
      />
      <p class="post-header-username">
        <span class="user-name"><strong>Vincent van Gogh</strong></span>
        Zudert, Netherlands
      </p>
    </div>
    <img
      src="./images/post-vangogh.jpg"
      alt="post-vangogh"
      class="post-image"
    />
    <div class="post-reactions">
      <img
        src="./images/icon-heart.png"
        alt="heart"
        class="like post-reactions-icon"
      />
      <img
        src="./images//icon-comment.png"
        alt="comment"
        class="comment post-reactions-icon"
      />
      <img
        src="./images/icon-dm.png"
        alt="share"
        class="share post-reactions-icon"
      />
    </div>
    <div class="post-likes"><strong>21492 likes</strong></div>
    <div class="post-comments">
      <strong>vincey1853</strong>
      just took a few mushrooms lol
    </div>
  </section>
  <section class="post">
    <div class="post-header">
      <img
        src="./images/avatar-vangogh.jpg"
        alt="avatar-vangogh"
        class="post-header-avatar"
      />
      <p class="post-header-username">
        <span class="user-name"><strong>Vincent van Gogh</strong></span>
        Zudert, Netherlands
      </p>
    </div>
    <img
      src="./images/post-vangogh.jpg"
      alt="post-vangogh"
      class="post-image"
    />
    <div class="post-reactions">
      <img
        src="./images/icon-heart.png"
        alt="heart"
        class="like post-reactions-icon"
      />
      <img
        src="./images//icon-comment.png"
        alt="comment"
        class="comment post-reactions-icon"
      />
      <img
        src="./images/icon-dm.png"
        alt="share"
        class="share post-reactions-icon"
      />
    </div>
    <div class="post-likes"><strong>21492 likes</strong></div>
    <div class="post-comments">
      <strong>vincey1853</strong>
      just took a few mushrooms lol
    </div>
    `;
    const heartIcon = postElement.querySelector(".heart-icon");
    heartIcon.addEventListener("click", () => {
      const likesCount = postElement.querySelector(".likes-count .count");
      const currentLikes = parseInt(likesCount.textContent);
      likesCount.textContent = currentLikes + 1;
    });
    postContainer.appendChild(content);
  }
}
