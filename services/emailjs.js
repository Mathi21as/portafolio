import emailjs from '@emailjs/browser'


function sendEmail (e) {
    e.preventDefault();
    const form = document.getElementById("contact_form")
    console.log(form.from_name.value);
    const data = {
        from_name: form.from_name.value,
        from_lastname: form.from_lastname.value,
        to_name: "Mathias Ledesma",
        message: form.message.value,
        client_email: form.client_email.value,
    }
    emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, data, process.env.PUBLIC_KEY)
}

export {sendEmail}