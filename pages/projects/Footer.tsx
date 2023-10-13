import Image from "next/image"

const Footer = ({main_page_style}:any) => {
	return(
		<footer className={`${main_page_style} flex flex-row gap-4 justify-center py-5 bg-gray-950/90`}>
			<p className="md:text-2xl text-xl my-auto">© Developed by Mathias Ledesma</p>
			<a href="" className="invert" >
				<Image width={"30"} height={"30"} src={"/resources/redes/github.png"} alt="github"/>
			</a>
			<a href="" className="invert">
				<Image width={"30"} height={"30"} src={"/resources/redes/linkedin.png"} alt="linkedin"/>
			</a>
		</footer>
	)
}

export default Footer