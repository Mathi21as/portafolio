import Image from "next/image"
import Link from "next/link"

const Projects = () => {
	const project = [
		{
			imagen: "/resources/projects/hardsoft.png",
			ruta: "https://hardsoftsj.netlify.app",
			name: "HardSoft",
			desc: "Landing page de un servicio técnico de computadoras",
			technologies: ["NextJS", "Tailwind CSS"],
			code: "https://github.com/Mathi21as/HardSoft"
		},
		{
			imagen: "/resources/projects/sistemaalumnosfinal.png",
			ruta: "#",
			name: "Gestión de alumnos",
			desc: "Página web de gestion de alumnos",
			technologies: ["Thymeleaf", "Bootstrap 5", "Java", "Spring", "Spring Web", "Spring Boot", "Spring Data", "MySQL"],
			code: "https://github.com/Mathi21as/SistemaCursos"
		},
		{
			imagen: "/resources/projects/fastnotes.png",
			ruta: "https://fastnotesmr.netlify.app",
			name: "FastNotes",
			desc: "Aplicación web de notas y listas de items",
			technologies: ["ReactJS", "Bootstrap 5"],
			code: "https://github.com/Mathi21as/FastNotes"
		},
		{
			imagen: "/resources/projects/portafolio.png",
			ruta: "#",
			name: "Portafolio",
			desc: "Mi portafolio",
			technologies: ["NextJS", "Tailwind CSS"],
			code: "https://github.com/Mathi21as/portafolio"
		},
		{
			imagen: "/resources/projects/encriptador.png",
			ruta: "https://mathi21as.github.io/Encriptador-de-texto---Oracle/",
			name: "Encriptador",
			desc: "Challenge encriptador de texto realizado en el programa ONE",
			technologies: ["HTML5", "CSS3", "Javascript"],
			code: "https://github.com/Mathi21as/Encriptador-de-texto---Oracle"
		},
		{
			imagen: "/resources/projects/hotelalura.png",
			ruta: "#",
			name: "Hotel Alura",
			desc: "Challenge de registro de huespedes del Hotel Alura del programa ONE",
			technologies: ["Java", "JPA/Hibernate", "MySQL"],
			code: "https://github.com/Mathi21as/HotelAlura"
		},
		{
			imagen: "/resources/projects/conversor.png",
			ruta: "#",
			name: "Conversor",
			desc: "Challenge conversor del programa ONE realizado con Java y Swing para la parte grafica",
			technologies: ["Java", "Java Swing"],
			code: "https://github.com/Mathi21as/ConversorAlura"
		},
		{
			imagen: "/resources/projects/weathernow.png",
			ruta: "https://mathi21as.github.io/weathernow/",
			name: "WeatherNow",
			desc: "Página web para consultar el clima de una o varias ciudades",
			technologies: ["ReactJS", "Bootstrap 4"],
			code: "https://github.com/Mathi21as/weathernow"
		},
	]

	return(
		<div className="grid grid-cols-1 md:grid-cols-3 w-full min-h-[calc(100vh-10vh)] mb-12 md:px-14 gap-4">
						{
							project.map((project, index)=>{
								return (
									<div className=" bg-neutral-950/20 rounded-xl" key={index}>
										<Link className="" href={`${project.ruta}`} target={`${project.ruta == "#" ? "" : "_blank"}`}>
											<Image width={"800"} className="rounded-xl" height={"0"} src={`${project.imagen}`} alt="" />
										</Link>
										<div className="my-5 px-5">
											<div className="flex justify-between">
												<p className="text-2xl mb-2">{`${project.name}`}</p>
												<Link href={project.code} target="_blank" className="text-md md:text-lg p-2 rounded-xl bg-green-500/50">{"</> Código"}</Link>
											</div>
											<p className="text-xl mt-2">{`${project.desc}`}</p>
											<div className="flex gap-3 justify-end mt-4 flex-wrap">
												{
													project.technologies.map((technology, index) => {
														return <p className="w-max bg-gray-800 rounded-xl py-1 px-2" key={index}>{technology}</p>
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