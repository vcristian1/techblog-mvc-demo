const id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

const commentFormHandler = async function (event) {
  event.preventDefault();

  // const postId = document.querySelector('input[name="post-id"]').value;
  const comment_text = document.querySelector('textarea[name="comment-body"]').value;
  const post_id = id;

  if (body) {
      await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({
              post_id,
              comment_text
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);