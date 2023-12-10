import emailjs from '@emailjs/browser'


function sendEmail (e) {
    e.preventDefault();
    const form = document.getElementById("contact_form")
    const data = {
        from_name: form.from_name.value,
        from_lastname: form.from_lastname.value,
        to_name: "Mathias Ledesma",
        message: form.message.value,
        client_email: form.client_email.value,
    }
    emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        data, 
        process.env.NEXT_PUBLIC_PUBLIC_KEY)
}

export {sendEmail}