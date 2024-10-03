function getXMLHttpRequest() {
  let xhr = null;

  if (window.XMLHttpRequest || window.ActiveXObject) {
    if (window.ActiveXObject) {
      try {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
    } else {
      xhr = new XMLHttpRequest();
    }
  } else {
    alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
    return null;
  }

  return xhr;
}

// Creer un commentaire
function comment(clickElement) {
  let xhr = getXMLHttpRequest();
  const idPub = clickElement.getAttribute("data-id");

  let comment = clickElement
    .closest(".input-comment-container")
    .querySelector(".input-comment").value;

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      const response = JSON.parse(xhr.responseText);

      const newComment = response.new_comment;
      let newCommentDiv = document.createElement("div");
      newCommentDiv.className =
        "d-flex gap-2 mt-2 mb-2 position-relative col-12 commenter";
      newCommentDiv.setAttribute("onclick", "handleComment()");

      // Set the inner HTML for the new comment div
      newCommentDiv.innerHTML = `
                      <div class="more-commentaire position-absolute" onclick="handleMoreComment(this)">
                          ...
                      </div>
                      <div class="d-flex">
                          <div class="avatar-compte">
                              <img src="assets/img/user.png" alt="">
                          </div>
                      </div>
  
                      <div class="comment-item flex-fill p-2 col-10" data-id-comment="${newComment.id_comment}">
                          <div class="nom d-flex align-items-center text-primary">
                              ${newComment.user.nom} ${newComment.user.prenom}
                          </div>
                          <p class="comment-contenu">${newComment.contenu}</p>
                      </div>
                  `;

      // Append the new comment to the list
      clickElement
        .closest(".post")
        .querySelector(".comment-cards")
        .prepend(newCommentDiv); //Affichage des résultats
    }
  };

  xhr.open("POST", "/social/comment", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.send(
    "commentaire=" +
      encodeURIComponent(comment) +
      "&id_pub=" +
      encodeURIComponent(idPub)
  );
  clickElement
    .closest(".input-comment-container")
    .querySelector(".input-comment").value = "";
}

//
function reacting(clickedElement) {
  clickedElement.addEventListener("click", function () {
    const reaction = this.getAttribute("data-reaction");
    const reactionImg = this.src;
    updateReaction(clickedElement, reaction, reactionImg);
  });
}

// Update the reaction display and send AJAX request
function updateReaction(clickedElement, reaction, reactionImg) {
  const id_pub = clickedElement.closest(".post").getAttribute("data-id");
  console.log(typeof id_pub);

  clickedElement.closest(".react-container").querySelector(".react-img").src =
    reactionImg;
  clickedElement
    .closest(".react-container")
    .querySelector(".react-label").textContent = getReactionLabel(reaction);

  // Send AJAX request to server to update reaction in database
  const xhr = getXMLHttpRequest();
  xhr.open("POST", "/social/react", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(
    "reaction=" +
      encodeURIComponent(reaction) +
      "&id_pub=" +
      encodeURIComponent(parseInt(id_pub))
  );

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
    }
  };
}

// Function to get the appropriate label for each reaction
function getReactionLabel(reaction) {
  switch (reaction) {
    case "aime":
      return "J'aime";
    case "adore":
      return "J'adore";
    case "haha":
      return "Haha";
    case "triste":
      return "Triste";
    case "colere":
      return "Grrr";
    default:
      return "J'aime";
  }
}

// Effacer un commentaire
function deleteComment(clickedElement) {
  const id_comment = clickedElement
    .closest(".comment-action")
    .getAttribute("data-id-comment");
  console.log(id_comment);

  const xhr = getXMLHttpRequest();
  xhr.open("POST", "/social/comment/delete", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("id=" + encodeURIComponent(id_comment));
  const comment = clickedElement.closest(".post").querySelector(".commenter");
  console.log(comment);
  comment.remove();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
    }
  };
  handleCommentActionCancel(clickedElement);
}

// Effacer une publication
function deletePost(clickedElement) {
  const id_pub = clickedElement.closest(".post").getAttribute("data-id");
  console.log(id_pub);

  const xhr = getXMLHttpRequest();
  xhr.open("POST", "/social/post/delete", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("id=" + encodeURIComponent(id_pub));
  const post = clickedElement.closest(".post");
  console.log(post);
  post.remove();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
    }
  };
  handlePostActionCancel(clickedElement);
}
