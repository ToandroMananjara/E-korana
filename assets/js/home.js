const commentContainers = document.querySelectorAll(".comment-container");
const moreContainers = document.querySelectorAll(".more-commentaire");

const handleComment = () => {
  commentContainers.forEach((commentContainer) => {
    const commentHeight = commentContainer.offsetHeight;
    if (commentHeight > 200) {
      commentContainer.style.height = "10em";
      commentContainer.style.overflowY = "scroll";
    }
  });
};

const commentActionHTML = (id_comment) => `
    <div class="comment-action position-absolute bg-light col-10 " data-id-comment = ${id_comment}>
        <div class="position-relative col-12 h-100 d-flex align-items-center justify-content-center">
            <div class="cancel-comment-action position-absolute" style="cursor: pointer;" onClick = "handleCommentActionCancel(this)" >&times;</div>
            <ul class="d-flex flex-column align-items-center list-unstyled">
                <li onClick="deleteComment(this)">supprimer</li>
                <li>modifier</li>
            </ul>
        </div>
    </div>
`;

const postActionHTML = (id_post) => `
    <div class="post-action position-absolute bg-light col-10 ">
        <div class="position-relative col-12 h-100 d-flex align-items-center justify-content-center">
            <div class="cancel-comment-action position-absolute" style="cursor: pointer;" onClick = "handlePostActionCancel(this)" >&times;</div>
            <ul class="d-flex flex-column align-items-center list-unstyled">
                <li onclick="deletePost(this)">supprimer</li>
                <li>modifier</li>
            </ul>
        </div>
    </div>
`;

const handleMoreComment = (clickedElement) => {
  const commentActions = document?.querySelectorAll(".comment-action");
  if (commentActions.length !== 0) {
    commentActions.forEach((commentAction) => {
      commentAction.remove();
    });
  }

  const postContainer = clickedElement.closest(".post");
  const id_comment = postContainer
    .querySelector(".comment-item ")
    .getAttribute("data-id-comment");
  postContainer.innerHTML += commentActionHTML(id_comment);
};

const handleCommentActionCancel = (clickedElement) => {
  const postContainer = clickedElement.closest(".post");
  const commentActionHTML = postContainer.querySelector(".comment-action");
  commentActionHTML.remove();
};

const handleMorePost = (clickedElement) => {
  const postActions = document?.querySelectorAll(".post-action");
  if (postActions.length !== 0) {
    postActions.forEach((postAction) => {
      postAction.remove();
    });
  }
  const postContainer = clickedElement.closest(".post");
  // console.log(postContainer.getAttribute("data-id"));
  const id_post = postContainer.getAttribute("data-id");
  // console.log(postContainer.getAttribute("data-id"));
  postContainer.innerHTML += postActionHTML(id_post);
};

const handlePostActionCancel = (clickedElement) => {
  const postContainer = clickedElement.closest(".post");

  const postActionHTML = postContainer.querySelector(".post-action");
  postActionHTML.remove();
};
const handleEditComment = () => {};
handleComment();
const likeContainer = document.querySelector(".like-container");

const reactElement = document.querySelector(".react");
console.log(reactElement);

// Ajoute les événements de survol
const handleReactHover = (hoverElement) => {
  console.log("ok");
  const reactElement = hoverElement
    .closest(".react-container")
    .querySelector(".react");
  reactElement.style.display = "flex";

  reactElement.addEventListener("mouseover", () => {
    reactElement.style.display = "flex";
  });
  reactElement.addEventListener("mouseout", () => {
    reactElement.style.display = "none";
  });
};

const handleReactOutHover = (hoverElement) => {
  const reactElement = hoverElement
    .closest(".react-container")
    .querySelector(".react");
  reactElement.style.display = "none";
};
