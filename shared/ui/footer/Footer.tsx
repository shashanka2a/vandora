import Image from 'next/image'

const Footer = () => {
	return (
		<footer className='mx-auto max-w-[1440px] px-4 pb-2'>
			<div className='overflow-hidden rounded-t-[44px] bg-primary-deepgreen px-4 pb-12 pt-10 text-achromatic-0 md:px-12 md:pb-14 md:pt-14'>
				<div className='grid gap-6 md:gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16'>
					<div className='min-w-0'>
						<div className='flex items-center gap-2 md:gap-3 mb-2'>
							<Image
								src='/images/vandora-icon.svg'
								alt='Vandora logo'
								width={32}
								height={32}
								className='brightness-0 invert opacity-90'
							/>
						</div>
						<div className='text-[16px] md:text-[18px] font-semibold tracking-tight'>
							Vandora
						</div>
					</div>

					<div className='grid grid-cols-3 gap-4 sm:gap-8 md:gap-10'>
						<div>
							<div className='text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-achromatic-0/60'>
								MENU
							</div>
							<ul className='mt-2 md:mt-4 space-y-1.5 md:space-y-2 text-[13px] md:text-[14px] text-achromatic-0/80'>
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
							<div className='text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-achromatic-0/60'>
								COMPANY
							</div>
							<ul className='mt-2 md:mt-4 space-y-1.5 md:space-y-2 text-[13px] md:text-[14px] text-achromatic-0/80'>
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
							<div className='text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-achromatic-0/60'>
								SOCIAL
							</div>
							<ul className='mt-2 md:mt-4 space-y-1.5 md:space-y-2 text-[13px] md:text-[14px] text-achromatic-0/80'>
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

				<div className='mt-6 md:mt-12 flex flex-col items-start justify-between gap-4 md:gap-6 border-t border-achromatic-0/12 pt-6 md:pt-8 md:flex-row md:items-center'>
					<div className='text-[11px] md:text-[12px] text-achromatic-0/55'>
						© {new Date().getFullYear()} VANDORA. ALL RIGHTS RESERVED.
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
