import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Habilidades from '../components/Habilidades'
import React from 'react'
import Nav from '../components/Nav/Nav'
import { useTranslation } from 'react-i18next'


const inter:object = Inter({ subsets: ['latin'] })

export default function Home() {
	const [language, setLanguage] = React.useState("es-ES")
	const {t} = useTranslation();
  return (
    <>
      <Head>
        <title>Portafolio - Mathias Ledesma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<Nav  setLanguage={setLanguage}/>

      <main 
				className="w-full"
				>
        <div 
					className='flex flex-col md:flex-row w-full md:px-20 justify-center pt-56'
					>
					<Image 
						className='mx-auto h-max md:mx-10 mb-10 md:mb-0 rounded-xl'
						src="/resources/fotopng.png"
						alt='my photo' 
						width={170} 
						height={170}/>
					<div className="flex flex-col grow md:h-max md:flex-col">
						<h1 
							className='mx-auto ml-5 w-full md:mr-20 md:ml-10 h-full md:pr-16 h-max
							md:pr-40 w-max text-5xl md:text-7xl opacity-80'
							>
							Mathias Ledesma
						</h1>
						<h2 
							className='overflow-hidden whitespace-nowrap border-r-4 mt-6 md:mt-8 w-max opacity-80
								border-blue-500 w-0 m-0 m-auto animate-typing_mobile md:animate-typing text-4xl md:text-5xl'
							>
							{t("Full-Stack Developer")}
						</h2>
					</div>
				</div>
				<section 
					className='h-max w-full flex flex-col 
						mt-10 px-12 md:px-20 py-12 md:relative'
					>
					<a id="sobremi"></a>
					<h3 
						className='text-4xl md:text-5xl md:mt-20 mx-auto md:mx-0'
						>
						{t("About me")}
					</h3>
					<p className='mt-12 md:mt-10 text-xl md:text-2xl font-light mx-auto'>
						{t("I am passionate about web development and have solid \
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
			my goals in this area.")}
					</p>
				</section>
				<a id="habilidades"></a>
				<Habilidades />
				<a id="proyectos"></a>
				<section 
					className='m-h-screen90 w-full my-10 px-12 md:px-20 
					py-12 md:relative'
					>
					<h3
						className='text-4xl md:text-5xl mb-16 mx-auto w-max md:mx-0'
					>
						{t("Projects")}
					</h3>
					<Projects />
				</section>
				<a id="contacto"></a>
				<Footer />
      </main>
    </>
  )
}

/*

Soy un apasionado del desarrollo web en 
						el cual tengo conocimientos y experiencia en el campo del front-end. 
						Hace unos años descubrí la programación y estudie de manera 
						autodidacta adquiriendo habilidades en esta área. Aunque tengo los 
						conocimientos para ser un desarrollador front-end, me gusta más la 
						lógica que el diseño, por lo que decidí comenzar a estudiar temas 
						relacionados al área de back-end y realizar proyectos para tener 
						experiencia al momento de trabajar como back-end o full-stack.

*/