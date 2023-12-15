function handleShare() {

  // Get the story_id (val)
  const val = urlParams.get("value");

  // Make an AJAX request to increment the share count
  $.ajax({
    url: 'increment_share_count.php',
    type: 'POST',
    data: { story_id: val },
    success: function(response) {
      console.log('Share count incremented successfully');
      console.log(response); 
      // Perform any post-share actions
    },
    error: function(xhr, status, error) {
      console.error('Error occurred while incrementing share count:', error);
    }
  });
}


function handleLike() {

  // Get the story_id (val)
  const val = urlParams.get("value");

  // Make an AJAX request to increment the share count
  $.ajax({
    url: 'increment_like_count.php',
    type: 'POST',
    data: { story_id: val },
    success: function(response) {
      console.log('Like count incremented successfully');
      console.log(response); 
      // Perform any post-share actions
    },
    error: function(xhr, status, error) {
      console.error('Error occurred while incrementing share count:', error);
    }
  });
}


function submitComment() {
  // Get the form data
  const formData = $('#comment-form').serialize();

  // Make an AJAX request to post_comments.php
  $.ajax({
    url: 'post_comments.php',
    type: 'POST',
    data: formData,
    success: function(response) {
      // Handle the server response if needed
      console.log('Comment submitted successfully:', response);
      // Perform any post-submit actions
    },
    error: function(xhr, status, error) {
      // Handle any errors that occur during the request
      console.error('Error occurred while submitting comment:', error);
    }
  });
}




function loadComments(Val){
  let commentSec = document.getElementById('comments');

  fetch(`fetchComments.php?value=${Val}`)
    .then(response => response.json())
    .then(data => {
      data.forEach(record => {
        let Name = record.username;
        let content = record.c_text.replace(/\n/g, "<br>");
        let date = record.date;
      
        const commentDiv = createCommentElement(Name, date, content);
        commentSec.appendChild(commentDiv);
      })
    })
    .catch(error => {
      console.error('Error:', error);
    });
}



function createCommentElement(name, date, content) {
  const comment = document.createElement('div');
  comment.classList.add('comment');

  const nameElement = document.createElement('h5');
  nameElement.innerHTML = name;

  const dateElement = document.createElement('p');
  dateElement.classList.add('comment-date');
  dateElement.innerHTML = date;

  const contentElement = document.createElement('p');
  contentElement.classList.add('comment-text');
  contentElement.textContent = content;

  comment.appendChild(nameElement);
  comment.appendChild(dateElement);
  comment.appendChild(contentElement);

  return comment;
  }