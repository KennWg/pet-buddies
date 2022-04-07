async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const city = document.querySelector('#city-signup').value.trim();

    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password,
          address,
          city
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log('success');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);