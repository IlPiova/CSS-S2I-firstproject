function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
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