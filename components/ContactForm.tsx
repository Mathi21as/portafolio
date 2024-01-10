import Image from "next/image";
import { sendEmail } from "../services/emailjs"
import { useTranslation } from "react-i18next"


const ContactForm = ({setEmailSend, emailSend}:any) => {
    const {t} = useTranslation();

    return(
        <form 
            className="w-full flex flex-col gap-5 text-start lg:w-max  text-stone-400"
            id="contact_form" 
            onSubmit={(e)=>{sendEmail(e); setEmailSend(true)}}>
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex flex-row gap-2">
                    <label htmlFor="from_name">{t("Name")}: </label>
                    <input type="text" name="from_name" className="w-full" required/>
                </div>
                <div className="flex flex-row gap-2">
                    <label htmlFor="from_lastname">{t("Lastname")}: </label>
                    <input type="text" name="from_lastname" className="w-full" required/>
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <label htmlFor="client_email">Email: </label>
                <input type="email" name="client_email" className="w-full" required/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message"> {t("Message")}: </label>
                <textarea name="message" id="" cols={30} rows={10} className="resize-none" required>
                </textarea>
            </div>
            <button className="bg-blue-950/90 hover:bg-blue-900 
				text-white py-2 px-4 rounded" 
                type="submit">
                {t("Send")}
            </button>
            { emailSend && <p className="mx-auto text-green-500 w-max">✅ Email enviado con exito</p> }
        </form>
    );
}

export default ContactForm;