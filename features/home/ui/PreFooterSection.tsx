const PreFooterSection = () => {
	return (
		<section className='mx-auto max-w-[1440px] px-4 pb-0'>
			<div 
				className='relative overflow-hidden rounded-b-[44px] h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat'
				style={{ backgroundImage: "url('/images/visual-bg-vandora.svg')" }}
			>
				{/* Overlay for better text readability */}
				<div className='absolute inset-0 bg-gradient-to-b from-black/20 to-black/40' />
				
				{/* Text Content */}
				<div className='absolute inset-0 flex items-center justify-center z-10 px-4'>
					<div className='text-center max-w-[800px]'>
						<h2 className='text-balance text-[32px] md:text-[48px] lg:text-[56px] leading-[110%] font-bold tracking-tight text-achromatic-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'>
							Raise the bar for every road connection
						</h2>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PreFooterSection
