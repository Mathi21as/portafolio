import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

const Projects = () => {
	const project = [
		{
			imagen: "/resources/projects/hardsoft.png",
			ruta: "https://hardsoftsj.netlify.app",
			name: "HardSoft",
			desc: "Home page of a computer technical service",
			technologies: ["NextJS", "Tailwind CSS"],
			code: "https://github.com/Mathi21as/HardSoft"
		},
		{
			imagen: "/resources/projects/sistemaalumnosfinal.png",
			ruta: "#",
			name: "Gestión de alumnos",
			desc: "Student management website",
			technologies: ["Thymeleaf", "Bootstrap 5", "Java", "Spring", "Spring Web", "Spring Boot", "Spring Data", "MySQL"],
			code: "https://github.com/Mathi21as/SistemaCursos"
		},
		{
			imagen: "/resources/projects/fastnotes.png",
			ruta: "https://fastnotesmr.netlify.app",
			name: "FastNotes",
			desc: "Notes and item lists web application",
			technologies: ["ReactJS", "Bootstrap 5"],
			code: "https://github.com/Mathi21as/FastNotes"
		},
		{
			imagen: "/resources/projects/portafolio.png",
			ruta: "#",
			name: "Portafolio",
			desc: "My portfolio",
			technologies: ["NextJS", "Tailwind CSS"],
			code: "https://github.com/Mathi21as/portafolio"
		},
		{
			imagen: "/resources/projects/encriptador.png",
			ruta: "https://mathi21as.github.io/Encriptador-de-texto---Oracle/",
			name: "Encriptador",
			desc: "Text encryption challenge carried out in the ONE program",
			technologies: ["HTML5", "CSS3", "Javascript"],
			code: "https://github.com/Mathi21as/Encriptador-de-texto---Oracle"
		},
		{
			imagen: "/resources/projects/hotelalura.png",
			ruta: "#",
			name: "Hotel Alura",
			desc: "Alura Hotel guest registration challenge of the ONE program",
			technologies: ["Java", "JPA/Hibernate", "MySQL"],
			code: "https://github.com/Mathi21as/HotelAlura"
		},
		{
			imagen: "/resources/projects/conversor.png",
			ruta: "#",
			name: "Conversor",
			desc: "Challenge converter of the ONE program made with Java and Swing for the graphic part",
			technologies: ["Java", "Java Swing"],
			code: "https://github.com/Mathi21as/ConversorAlura"
		},
		{
			imagen: "/resources/projects/weathernow.png",
			ruta: "https://mathi21as.github.io/weathernow/",
			name: "WeatherNow",
			desc: "Website to check the weather of one or more cities",
			technologies: ["ReactJS", "Bootstrap 4"],
			code: "https://github.com/Mathi21as/weathernow"
		},
		{
			imagen: "/resources/projects/academia_jam2023.png",
			ruta: "#",
			name: "Academia JAM",
			desc: "Management system of an academy carried out as a team at the JAM 2023 of San Juan Tec.",
			technologies: ["Jinja2", "Flask", "Python", "MySQL", "Bootstrap", "HTML5", "CSS3"],
			code: "https://github.com/DavidCosta92/academia_sj_tec_JAM23/tree/mathias"
		},
	]
	const {t} = useTranslation();

	return(
		<div className="grid grid-cols-1 md:grid-cols-3 w-full min-h-[calc(100vh-10vh)] mb-12 md:px-14 gap-4 ">
			{
				project.map((project, index)=>{
					return (
						<div className="bg-neutral-950/20 rounded-xl" key={index}>
							<Link className="" href={`${project.ruta}`} target={`${project.ruta == "#" ? "" : "_blank"}`}>
								<Image width={"800"} height={"0"} className="rounded-xl w-full h-44" src={`${project.imagen}`} alt="" />
							</Link>
							<div className="my-5 px-5">
								<div className="flex justify-between">
									<p className="text-2xl mb-2">{`${project.name}`}</p>
									<Link 
										href={project.code} 
										target="_blank" 
										className=" text-md md:text-sm md:hover:bg-green-500/70 whitespace-nowrap 
										p-2 h-min font-light rounded-xl bg-green-500/50">
											{`</> ${t("Code")}`}
									</Link>
								</div>
								<p className="text-xl font-light mt-2">{t(project.desc)}</p>
								<div className="flex gap-3 justify-end align_bottom mt-4 flex-wrap">
									{
										project.technologies.map((technology, index) => {
											return <p className="w-max bg-gray-800 font-light rounded-xl py-1 px-2" key={index}>{technology}</p>
										})
									}
								</div>
							</div>
						</div>
					)
				})
			}
					</div>
	)
}

export default Projects