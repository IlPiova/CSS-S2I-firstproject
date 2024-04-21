function sendMail() {
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let from_mail = document.getElementById("from_mail").value;
    let message = document.getElementById("message").value;

    if (name && lastname && from_mail && message) {
        let params = {
            from_name: name,
            lastname: lastname,
            from_mail: from_mail,
            message: message
        };

        emailjs.send("service_t7921jo", "template_3bj8hr8", params)
            .then((response) => {
                alert('Email inviata con successo!', response.status, response.text);
            }, (err) => {
                alert('Invio email fallito...', err);
            });
    } else {
        alert('Per favore compila tutti i campi obbligatori.');
    }
}