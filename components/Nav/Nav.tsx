import NavDesktop from "./NavDesktop"
import NavMobile from "./NavMobile"

const Nav = ({setLanguage}:any) => {
	return(
		<>
		<NavDesktop setLanguage={setLanguage}/>
		<NavMobile setLanguage={setLanguage}/>
		</>
	)
}

export default Nav