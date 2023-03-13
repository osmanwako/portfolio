const errorlabel = document.querySelector('#errorlabelid');
const form = document.querySelector('#contactformid');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
let storedcontactme = { name: '', email: '', message: '' };

if (localStorage.getItem('storedcontactme')) {
  storedcontactme = JSON.parse(localStorage.getItem('storedcontactme'));
  name.value = storedcontactme.name;
  email.value = storedcontactme.email;
  message.value = storedcontactme.message;
} else {
  localStorage.setItem('storedcontactme', JSON.stringify(storedcontactme));
}

function showerror() {
  email.style.border = '3px solid red';
  errorlabel.textContent = 'Email should be only lowercase.*';
  errorlabel.style.display = 'inline-block';
  return false;
}

function checkform(event) {
  const text = email.value;
  const n = text.search('[A-Z]+');
  if (n < 0) return true;
  event.preventDefault();
  return showerror();
}

function recordinput(event) {
  const [input, value] = [event.target.name, event.target.value];
  storedcontactme[input] = value;
  localStorage.setItem('storedcontactme', JSON.stringify(storedcontactme));
}

form.addEventListener('submit', checkform);
email.addEventListener('change', recordinput);
name.addEventListener('change', recordinput);
message.addEventListener('change', recordinput);
