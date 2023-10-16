import Image from "next/image"
import { useTranslation } from "react-i18next"

const Footer = () => {
	const {t} = useTranslation();
	return(
		<footer className="flex flex-row gap-4 justify-center py-5">
			<p className="md:text-2xl text-xl my-auto">© {t("Developed by")} Mathias Ledesma</p>
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