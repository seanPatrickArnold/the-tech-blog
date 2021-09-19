async function addPost(event) {
    event.preventDefault();
    console.log('add post');

    const response = await fetch(`/dashboard/post`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/post');
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('#add-post-button').addEventListener('click', addPost);