import Image from "next/image"
import { useTranslation } from "react-i18next"

const Footer = () => {
	const {t} = useTranslation();
	return(
		<footer className="flex flex-col lg:flex-row gap-4 justify-center py-5">
			<p className="lg:text-2xl text-xl w-full lg:w-max text-center my-auto">© {t("Developed by")} Mathias Ledesma</p>
			<div className="flex flex-row justify-center gap-5">
			<a href="" className="invert" >
				<Image width={"30"} height={"30"} src={"/resources/redes/github.png"} alt="github"/>
			</a>
			<a href="" className="invert">
				<Image width={"30"} height={"30"} src={"/resources/redes/linkedin.png"} alt="linkedin"/>
			</a>
			</div>
		</footer>
	)
}

export default Footer