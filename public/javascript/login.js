async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
            username: username,
            email: email,
            password: password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check the response status
        if (response.ok) {
            console.log('logged in');
            document.location.replace('/dashboard');
        } else {
          alert(response.statusText);
        }
      }
  }

  function displayMessage() {
    var wordCount = 0;
  
    // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
    var msgInterval = setInterval(function() {
      if (words[wordCount] === undefined) {
        clearInterval(msgInterval);
      } else {
        mainEl.textContent = words[wordCount];
        wordCount++;
      }
    }, 300);
  }

function automaticLogout() {
    window.counter = 0;
    console.log(window.counter);
    setTimeout(
        () => {
            console.log('this');
            window.counter++;
            console.log(window.counter);
            if (window.counter > 4) {
                fetch('/api/users/logout', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' }
                });
                clearInterval();
                console.log('timer done');
            }
        },
        1000
    );
    console.log('set timeout started');
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
            email: email,
            password: password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check the response status
        if (response.ok) {
            sleep(1000);
            document.location.replace('/dashboard');
        }
        else {
            alert(response.statusText);
        }
    }
}
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);