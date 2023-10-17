const CardHabilidades = ({side, icons}:any) => {
	if(icons == null)
		return(<></>)
		
	return(
		<div className="mx-auto w-full md:w-11/12 pt-5 bg-neutral-950/20">
			  <div className="">
						<h1 
							className='text-2xl md:text-3xl h-full justify-center text-white text-center'
							>
								{side}
							</h1>
			    <div 
						className="py-10 flex flex-row font-light gap-5 md:gap-10 flex-wrap p-14 justify-center grid-center"
						>
			      {
							icons.map((ico:any, index:number) => {
								return (
									<div className="flex flex-col basis-28 md:basis-20 justify-center" key={index}>
										{ico[1]}
										<p className="py-8 mx-auto md:text-xl">{ico[0]}</p>
									</div>
								)
							})
						}
			    </div>
			  </div>
			</div>
	)
}

export default CardHabilidades