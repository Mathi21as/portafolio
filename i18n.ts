import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  es: {
    translation: {
			"About me": "Sobre mí",
			"Projects": "Proyectos",
			"Skills": "Habilidades",
			"Change language": "Cambiar idioma",
			"Contact": "Contacto",
			"Full-Stack Developer": "Desarrollador Full-Stack",
			"I am passionate about web development and have solid \
			experience and skills in the front-end field. A few years \
			ago, I entered the world of programming as a self-taught \
			person and have been perfecting my knowledge in this area. \
			Although I have the necessary foundation to work as a front-end \
			developer, I feel a greater affinity for logic and programming \
			than for design. For this reason, I decided to embark on a training \
			process in the field of back-end and, at the same time, carry out \
			various projects to accumulate experience. My goal is to prepare \
			for a career as a back-end or full-stack developer, as I am convinced \
			that my passion and skills in programming will lead me to achieve \
			my goals in this area.": 
			"Soy un apasionado del desarrollo web y cuento con experiencia y \
			habilidades sólidas en el ámbito del front-end. Hace algunos años, \
			me adentré en el mundo de la programación de forma autodidacta y he \
			ido perfeccionando mis conocimientos en esta área. A pesar de que \
			tengo la base necesaria para desempeñarme como desarrollador front-end, \
			siento una mayor afinidad por la lógica y la programación que por el \
			diseño. Por este motivo, decidí embarcarme en un proceso de formación \
			en el campo del back-end y, al mismo tiempo, llevar a cabo diversos \
			proyectos para acumular experiencia. Mi objetivo es prepararme para una \
			carrera como desarrollador back-end o full-stack, ya que estoy convencido \
			de que mi pasión y habilidades en la programación me llevarán a alcanzar \
			mis metas en esta área.",
			"Code": "Código",
			"Home page of a computer technical service": "Página principal de un servicio técnico de computadoras",
			"Student management website": "Página web de gestion de alumnos",
			"Notes and item lists web application": "Aplicación web de notas y listas de items",
			"My portfolio": "Mi portafolio",
			"Text encryption challenge carried out in the ONE program": "Desafío encriptador de texto realizado en el programa ONE",
			"Alura Hotel guest registration challenge of the ONE program": "Desafío de registro de huespedes del Hotel Alura del programa ONE",
			"Challenge converter of the ONE program made with Java and Swing for the graphic part": "Desafío conversor del programa ONE realizado con Java y Swing para la parte gráfica",
			"Website to check the weather of one or more cities": "Página web para consultar el clima de una o varias ciudades",
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