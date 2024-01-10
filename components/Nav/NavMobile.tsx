import i18n from "@/i18n";
import React from "react";
import { useTranslation } from "react-i18next";

const toggleMenu = (event:any) => {
	let menuppal = document.querySelector( ".menuppal" ) as HTMLElement;
	let menu = document.querySelector('.hamburger') as HTMLElement;
	menu.classList.toggle("is_active");
	menuppal.classList.toggle("is_active");
	event.preventDefault();
}

const handleMenu = () => {
	let menu = document.querySelector('.hamburger') as HTMLElement;
	menu.addEventListener('click', toggleMenu);
}

const NavMobile = ({setLanguage}:any) => {
	const {t} = useTranslation();

	const handleChangeLanguage = () => {
		if(i18n.language == "es-ES"){
			i18n.changeLanguage("en-IN");
			setLanguage("en-IN");
		} else {
		i18n.changeLanguage("es-ES");
		setLanguage("es-ES");
		}
	}

	return(
		<nav className='md:hidden fixed top-0 md:bottom-0 md:right-0 h-14 w-full 
					w-full bg-neutral-950/90 flex flex-row  
					text-sm md:text-lg z-10 md:[&>*]:scale-90'>
				<div className="hamburger" onClick={()=>handleMenu()}>
					<div className="_layer -top"></div>
					<div className="_layer -mid"></div>
					<div className="_layer -bottom"></div>
				</div>
				<nav className="menuppal bg-neutral-950/90">
					<ul className="px-5 pt-8">
						<li>
							<a 
								href="#sobremi"
								className='md:my-3 my-auto'>
								{t("About me")}
							</a>
						</li>
						<li>
							<a 
								href="#habilidades"
								className='md:my-3 my-auto'>
								{t("Skills")}
							</a>
						</li>
						<li>
							<a 
								href="#proyectos"
								className='md:my-3 my-auto'>
								{t("Projects")}
							</a>
						</li>
						<li>
							<button 
								onClick={()=>handleChangeLanguage()}
								className='md:my-3'>
								{t("🇺🇸 English")}
							</button>
						</li>
						<li>
							<a 
								href="#contacto"
								className='md:my-3 my-auto'>
								{t("Contact")}
							</a>
						</li>
					</ul>
				</nav>
				<h1 className="text-2xl mx-5 my-auto">Portafolio</h1>
			</nav>
	)
}

export default NavMobile;