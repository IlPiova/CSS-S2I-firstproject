function sendMail() {
    let params = {
        from_name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        from_mail: document.getElementById("from_mail").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_t7921jo", "template_3bj8hr8", params)
        .then((response) => {
            alert('SUCCESS!', response.status, response.text);
        }, (err) => {
            alert('FAILED...', err);
        });
}