const Footer = () => {
	return (
		<footer className='mx-auto max-w-[1440px] px-4 pb-16'>
			<div className='overflow-hidden rounded-[44px] bg-primary-deepgreen px-8 pb-14 pt-16 text-achromatic-0 md:px-12'>
				<div className='grid gap-12 lg:grid-cols-[1fr_560px] lg:items-end'>
					<div className='min-w-0'>
						<div className='text-[18px] font-semibold tracking-tight'>
							Vandora
						</div>
					</div>

					<div className='grid gap-10 sm:grid-cols-3'>
						<div>
							<div className='text-[12px] font-semibold tracking-[0.14em] text-achromatic-0/60'>
								MENU
							</div>
							<ul className='mt-4 space-y-2 text-[14px] text-achromatic-0/80'>
								<li>
									<a href='./dating' className='hover:text-achromatic-0'>
										Dating
									</a>
								</li>
								<li>
									<a href='./friends' className='hover:text-achromatic-0'>
										Friends
									</a>
								</li>
								<li>
									<a href='./builder-help' className='hover:text-achromatic-0'>
										Builder help
									</a>
								</li>
							</ul>
						</div>
						<div>
							<div className='text-[12px] font-semibold tracking-[0.14em] text-achromatic-0/60'>
								COMPANY
							</div>
							<ul className='mt-4 space-y-2 text-[14px] text-achromatic-0/80'>
								<li>
									<a href='./help' className='hover:text-achromatic-0'>
										Help
									</a>
								</li>
								<li>
									<a href='./terms' className='hover:text-achromatic-0'>
										Terms
									</a>
								</li>
								<li>
									<a href='./safety' className='hover:text-achromatic-0'>
										Safety
									</a>
								</li>
							</ul>
						</div>
						<div>
							<div className='text-[12px] font-semibold tracking-[0.14em] text-achromatic-0/60'>
								SOCIAL
							</div>
							<ul className='mt-4 space-y-2 text-[14px] text-achromatic-0/80'>
								<li>
									<a
										href='https://x.com/vandora'
										target='_blank'
										rel='noopener'
										className='hover:text-achromatic-0'>
										X (Twitter)
									</a>
								</li>
								<li>
									<a
										href='https://www.linkedin.com/company/vandora/'
										target='_blank'
										rel='noopener'
										className='hover:text-achromatic-0'>
										LinkedIn
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='mt-16 flex flex-col items-start justify-between gap-6 border-t border-achromatic-0/12 pt-10 md:flex-row md:items-center'>
					<div className='text-[12px] text-achromatic-0/55'>
						© {new Date().getFullYear()} VANDORA. ALL RIGHTS RESERVED.
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
