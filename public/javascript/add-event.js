async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const details = document.querySelector('textarea[name="post-content"]').value;

    console.log(title,event);
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        details
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);