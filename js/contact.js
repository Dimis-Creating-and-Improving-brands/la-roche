const name = document.getElementById('contact-name');
const surname = document.getElementById('contact-surname');
const email = document.getElementById('contact-email');
const message = document.getElementById('contact-message');


async function submitForm(){
    let data = {
        name: name.value,
        email: email.value,
        surname: surname.value,
        message: message.value,
    };
    let body = new FormData();
    for (let i in data) {
        body.append(i, data[i]);
    }
    let method = "post";
    let res = await fetch('/mail.php', {method, body});
    if(res.ok){
        clearForm();
    }
}


function clearForm(){
    name.value = '';
    email.value = '';
    surname.value = '';
    message.value = '';
}
