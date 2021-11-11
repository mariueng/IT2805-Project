const formDiv = document.getElementById('forms-div');
const form = document.getElementById('registrationForm');

/* Event listeners */
formDiv.addEventListener('submit', formSubmit);

/* Gets information and makes an response */
function formSubmit(event) {
  event.preventDefault();

  const fullName = form[0].value;
  const email = form[1].value;

  formDiv.innerHTML = '';

  const response1 = document.createElement('p');
  response1.setAttribute('style', 'padding-top:30px')
  response1.innerText = 'Thank you for getting in touch, ' + fullName + '.';

  const response2 = document.createElement('p');
  response2.innerText = "We'll send you an email on " + email + " as soon as possible."

  formDiv.appendChild(response1);
  formDiv.appendChild(response2);
}

/* Resets the form to the default */
function resetForm(event) {
  formDiv.innerHTML = '';

  for (let i = 0; i < form.length-1; i++) {
    form[i].value = '';
  }
  formDiv.appendChild(form);
}