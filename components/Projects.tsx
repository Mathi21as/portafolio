import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

const Projects = () => {
	const project = [
		{
			imagen: "/resources/projects/hardsoft.png",
			ruta: "https://hardsoftsj.netlify.app",
			name: "HardSoft",
			type: "webpage",
			desc: "Home page of a computer technical service",
			technologies: ["NextJS", "Tailwind CSS"],
			code: "https://github.com/Mathi21as/HardSoft"
		},
		{
			imagen: "/resources/projects/sistemaalumnosfinal.png",
			ruta: "#",
			name: "Student management",
			type: "webpage",
			desc: "Student management website",
			technologies: ["Thymeleaf", "Bootstrap 5", "Java", "Spring", "Spring Web", "Spring Boot", "Spring Data", "MySQL"],
			code: "https://github.com/Mathi21as/SistemaCursos"
		},
		{
			imagen: "/resources/projects/fastnotes.png",
			ruta: "https://fastnotesmr.netlify.app",
			name: "FastNotes",
			type: "webpage",
			desc: "Notes and item lists web application",
			technologies: ["ReactJS", "Bootstrap 5"],
			code: "https://github.com/Mathi21as/FastNotes"
		},
		{
			imagen: "/resources/projects/hotelalura.png",
			ruta: "#",
			name: "Alura Hotel",
			type: "desktop app",
			desc: "Alura Hotel guest registration challenge of the ONE program",
			technologies: ["Java", "JPA/Hibernate", "MySQL"],
			code: "https://github.com/Mathi21as/HotelAlura"
		},
		{
			imagen: "/resources/projects/conversor.png",
			ruta: "#",
			name: "Converter",
			type: "desktop app",
			desc: "Challenge converter of the ONE program made with Java and Swing for the graphic part",
			technologies: ["Java", "Java Swing"],
			code: "https://github.com/Mathi21as/ConversorAlura"
		},
		{
			imagen: "/resources/projects/weathernow.png",
			ruta: "https://mathi21as.github.io/weathernow/",
			name: "WeatherNow",
			type: "webpage",
			desc: "Website to check the weather of one or more cities",
			technologies: ["ReactJS", "Bootstrap 4"],
			code: "https://github.com/Mathi21as/weathernow"
		},
		{
			imagen: "/resources/projects/academia_jam2023.png",
			ruta: "#",
			name: "Academia JAM",
			type: "webpage",
			desc: "Management system of an academy carried out as a team at the JAM 2023 of San Juan Tec.",
			technologies: ["Jinja2", "Flask", "Python", "MySQL", "Bootstrap", "HTML5", "CSS3"],
			code: "https://github.com/DavidCosta92/academia_sj_tec_JAM23/tree/mathias"
		},
	]
	const {t} = useTranslation();

	return(
		<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full min-h-[calc(100vh-10vh)]
			  gap-4 ">
			{
				project.map((project, index)=>{
					return (
						<div className="bg-neutral-950/20 rounded-xl py-8" key={index}>
							<div className="px-6 flex flex-col gap-5 h-76">
								<p className="text-2xl w-max mx-auto">{`${t(project.name)}`}</p>
								<p className="text-xl font-light text-stone-400 h-16 mb-5">{t(project.desc)}</p>
								<div className="flex h-20 py-5 gap-3 mt-3 overflow-x-scroll">
									{
										project.technologies.map((technology, index) => {
											return <p className="w-max bg-gray-800 font-light h-8 rounded-xl py-1 px-2 whitespace-nowrap" key={index}>{technology}</p>
										})
									}
								</div>
								<div className="flex flex-row justify-center gap-5 items-end mt-3">
										<Link 
											href={project.ruta} 
											target="_blank" 
											className={`${project.type == "webpage" ? "bg-blue-950/90 lg:hover:bg-blue-900/90" : 
												"bg-blue-950/50 pointer-events-none"} text-lg lg:text-sm whitespace-nowrap 
												p-2 h-min font-light rounded-xl flex flex-row gap-2`}>
												<Image 
													width={"20"} 
													height={"20"} 
													src={project.type == "webpage" ? "/resources/redes/webpage.svg"
														: "/resources/redes/desktop.svg"} 
													className="invert py-1" 
													alt="web page"/>
												{
													project.type == "webpage" ?
														<p className="text-lg lg:text-sm lg:pt-1">{`${t("Web page")}`}</p>
														:
														<p className="text-lg lg:text-sm lg:pt-1">{`${t("Desktop")}`}</p>
												}
										</Link>
										<Link 
											href={project.code} 
											target="_blank" 
											className=" lg:hover:bg-blue-900/90 whitespace-nowrap 
											p-2 h-min font-light rounded-xl bg-blue-950/90 flex flex-row gap-2">
												<Image width={"20"} height={"20"} src={"/resources/redes/github.png"} className="invert py-1" alt="github"/>
												<p className="text-lg lg:text-sm lg:pt-1">GitHub</p>
										</Link>
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