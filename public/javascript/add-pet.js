async function addPetFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('#name').value.trim();
    const breed = document.querySelector('#breed').value.trim();
    const age = document.querySelector('#age').value.trim();
    const size = document.querySelector('#size').value.trim();
    const description = document.querySelector('#description').value.trim();
  
    if (name && breed && age && size && description) {
        console.log(name, breed, age, size, description);
      const response = await fetch('/api/pets', {
        method: 'post',
        body: JSON.stringify({
          name,
          breed,
          age,
          size,
          description
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.pet-form').addEventListener('submit', addPetFormHandler);