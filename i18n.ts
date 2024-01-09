import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
			"About me": "Sobre mí",
			"Projects": "Proyectos",
			"Skills": "Habilidades",
			"Change language": "Cambiar idioma",
			"Contact": "Contacto",
			"Full-Stack Developer": "Desarrollador Full-Stack",
			"I am a curious and proactive fullstack web developer with \
			although with more affinity for the backend.": 
			"Soy un curioso y proactivo desarrollador web fullstack, \
			aunque con más afinidad por el backend.",
			"Download Resume": "Descargar CV",
			"A few years \
			ago, I entered the world of programming as a self-taught \
			person and have been perfecting my knowledge in the area of ​​web development. \
			Although I have the necessary foundation to work as a front-end \
			developer, I feel a greater affinity for logic and programming \
			than for design. For this reason, I decided to embark on a training \
			process in the field of back-end and, at the same time, carry out \
			various projects to accumulate experience. My goal is to prepare \
			for a career as a back-end or full-stack developer, as I am convinced \
			that my passion and skills in programming will lead me to achieve \
			my goals in this area.": 
			"Hace algunos años, \
			me adentré en el mundo de la programación de forma autodidacta y he \
			ido perfeccionando mis conocimientos en el área de desarrollo web. A pesar de que \
			tengo la base necesaria para desempeñarme como desarrollador front-end, \
			siento una mayor afinidad por la lógica y la programación que por el \
			diseño. Por este motivo, decidí embarcarme en un proceso de formación \
			en el campo del back-end y, al mismo tiempo, llevar a cabo diversos \
			proyectos para acumular experiencia. Mi objetivo es prepararme para una \
			carrera como desarrollador back-end o full-stack, ya que estoy convencido \
			de que mi pasión y habilidades en la programación me llevarán a alcanzar \
			mis metas en esta área.",
			"Home page of a computer technical service": "Página principal de un servicio técnico de computadoras",
			"Student management": "Gestión de alumnos",
			"Student management website": "Página web de gestion de alumnos",
			"Notes and item lists web application": "Aplicación web de notas y listas de items",
			"Portfolio": "Portafolio",
			"My portfolio": "Mi portafolio",
			"Encryptor": "Encriptador",
			"Alura Hotel": "Hotel Alura",
			"Text encryption challenge carried out in the ONE program": "Desafío encriptador de texto realizado en el programa ONE",
			"Alura Hotel guest registration challenge of the ONE program": "Desafío de registro de huespedes del Hotel Alura del programa ONE",
			"Converter": "Conversor",
			"Challenge converter of the ONE program made with Java and Swing for the graphic part": "Desafío conversor del programa ONE realizado con Java y Swing para la parte gráfica",
			"Website to check the weather of one or more cities": "Página web para consultar el clima de una o varias ciudades",
			"Management system of an academy carried out as a team at the JAM 2023 of San Juan Tec.": "Sistema de gestion de una academia realizado en equipo en la JAM 2023 de San Juan Tec.",
			"Web page": "Página web",
			"Desktop": "Escritorio",
			"Complete the form to contact me.": "Completa el formulario para ponerte en contacto conmigo.",
			"Name": "Nombre",
			"Lastname": "Apellido",
			"Message": "Mensaje",
			"Send": "Enviar",
			"Developed by": "Desarrollado por",
		}
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es-ES",// language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;