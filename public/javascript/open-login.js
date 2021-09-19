async function login(event) {
    event.preventDefault();

    const response = await fetch(`/login`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('#login-button').addEventListener('click', login);