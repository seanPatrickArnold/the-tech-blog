async function signup(event) {
    event.preventDefault();

    const response = await fetch(`/signup`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.replace('/signup');
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('#signup-button').addEventListener('click', signup);