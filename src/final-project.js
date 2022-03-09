let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  let nameEle = document.querySelector('#name');
  let emailEle= document.querySelector('#email');
  let messageEle = document.querySelector('#message')

  event.preventDefault();
  alert('Message submitted!')

  nameEle.value = '';
  emailEle.value = '';
  messageEle.value = '';

}