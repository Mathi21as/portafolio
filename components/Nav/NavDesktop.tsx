import i18n from "@/i18n";
import React from "react";
import { useTranslation } from "react-i18next";

const NavDesktop = ({setLanguage}:any) => {
	const {t} = useTranslation();

	const handleChangeLanguage = () => {
		if(i18n.language == "es-ES"){
			i18n.changeLanguage("en-IN")
			setLanguage("en-IN")
		} else {
		i18n.changeLanguage("es-ES")
		setLanguage("es-ES")
		}
	}

	return(
			<nav 
					className='fixed top-0 md:bottom-0 md:right-0 h-14 w-full 
					w-full bg-neutral-950/90 hidden md:flex md:flex-row justify-center 
					text-sm md:text-lg z-10 md:[&>*]:scale-90'
					>
					<a 
						href="#sobremi"
						className='w-max mx-auto md:my-3 my-auto hover:text-slate-500'
						>
						{t("About me")}
					</a>
					<a 
						href="#habilidades" 
						className='w-max mx-auto md:my-3 my-auto hover:text-slate-500'
						> 
						{t("Skills")}
					</a>
					<a 
						href="#proyectos" 
						className='w-max mx-auto md:my-3 my-auto hover:text-slate-500'
						>
						{t("Projects")}
					</a>
					<button 
						onClick={()=>handleChangeLanguage()}
						className='w-max mx-auto md:my-3 my-auto hover:text-slate-500'
						>
						{t("🇺🇸 English")}
					</button>
					<a 
						href="#contacto" 
						className='w-max mx-auto md:my-3 my-auto hover:text-slate-500'
						>
						{t("Contact")}
					</a>
			</nav>
	)
}

export default NavDesktop