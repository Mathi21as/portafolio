"use client"
import { useEffect, useState } from "react"
import NavDesktop from "./NavDesktop"
import NavMobile from "./NavMobile"

const Nav = ({setLanguage}:any) => {
	const [windowWidth, setWindowWidth] = useState<number | undefined>();

	useEffect(()=>{
		if(typeof window != "undefined"){
			setWindowWidth(window.innerWidth);
			console.log(window.innerWidth);
			
		}
	}, []);

	return(
		<>
			{
				windowWidth && windowWidth >= 1024 ? <NavDesktop setLanguage={setLanguage}/> :
				<NavMobile setLanguage={setLanguage}/>
			}
		</>
	)
}

export default Nav;