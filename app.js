const btn = document.querySelector('#form_btn');
const ip = document.querySelector('#form_ip');
const errormsg = document.querySelector('#error-msg');
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
btn.addEventListener('click', (e) => {
    if (!ip.value.match(mailformat)) {
        e.preventDefault();
        errormsg.style.display = 'block';
    }
})