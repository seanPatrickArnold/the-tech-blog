async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
            username: username,
            password: password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check the response status
        if (response.ok) {
            const currentTime = Date.now();
            while (Date.now() - currentTime < 1000) {};
            document.location.replace('/dashboard');
        }
        else {
            alert(response.statusText);
        }
    }
}
  
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);