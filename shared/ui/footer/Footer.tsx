import BI from '@/shared/assets/icons/logo/BI'

const Footer = () => {
	return (
		<footer className='mx-auto max-w-[1440px] px-4 pb-16'>
			<div className='overflow-hidden rounded-[44px] bg-primary-deepgreen px-8 pb-14 pt-16 text-achromatic-0 md:px-12'>
				<div className='grid gap-12 lg:grid-cols-[1fr_560px] lg:items-end'>
					<div className='min-w-0'>
						<div className='flex items-center gap-3'>
							<BI width={92} fill='var(--color-achromatic-0)' />
							<div className='text-[18px] font-semibold tracking-tight'>Vandora</div>
						</div>
						<p className='mt-6 max-w-[420px] text-[14px] leading-[170%] text-achromatic-0/75'>
							A trusted, safety-first community for van-lifers to date other nomads,
							find friends by shared activities, and get builder help on the road.
						</p>
					</div>

					<div className='grid gap-10 sm:grid-cols-3'>
						<div>
							<div className='text-[12px] font-semibold tracking-[0.14em] text-achromatic-0/60'>
								PRODUCT
							</div>
							<ul className='mt-4 space-y-2 text-[14px] text-achromatic-0/80'>
								<li>Dating</li>
								<li>Friends</li>
								<li>Builder help</li>
							</ul>
						</div>
						<div>
							<div className='text-[12px] font-semibold tracking-[0.14em] text-achromatic-0/60'>
								COMPANY
							</div>
							<ul className='mt-4 space-y-2 text-[14px] text-achromatic-0/80'>
								<li>Safety</li>
								<li>Terms</li>
								<li>Privacy</li>
							</ul>
						</div>
						<div>
							<div className='text-[12px] font-semibold tracking-[0.14em] text-achromatic-0/60'>
								SOCIAL
							</div>
							<ul className='mt-4 space-y-2 text-[14px] text-achromatic-0/80'>
								<li>Instagram</li>
								<li>YouTube</li>
								<li>X</li>
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

