import BI from '@/shared/assets/icons/logo/BI'

const Footer = () => {
	return (
		<footer className='mx-auto max-w-[1440px] px-4 pb-16 pt-0'>
			<div className='overflow-hidden rounded-[44px] bg-primary-deepgreen px-8 pb-14 pt-16 text-achromatic-0 md:px-12'>
				<div className='grid gap-12 lg:grid-cols-[1fr_520px] lg:items-end'>
					<div className='min-w-0'>
						<div className='flex items-end gap-3'>
							<BI width={86} fill='var(--color-achromatic-0)' />
						</div>
					</div>

					<div className='grid gap-10 sm:grid-cols-3'>
						<div>
							<div className='text-[12px] font-semibold tracking-[0.14em] text-achromatic-0/60'>
								MENU
							</div>
							<ul className='mt-4 space-y-2 text-[14px] text-achromatic-0/80'>
								<li>Customers</li>
								<li>Resources</li>
								<li>Careers</li>
							</ul>
						</div>
						<div>
							<div className='text-[12px] font-semibold tracking-[0.14em] text-achromatic-0/60'>
								COMPANY
							</div>
							<ul className='mt-4 space-y-2 text-[14px] text-achromatic-0/80'>
								<li>Help</li>
								<li>Terms</li>
								<li>Security</li>
							</ul>
						</div>
						<div>
							<div className='text-[12px] font-semibold tracking-[0.14em] text-achromatic-0/60'>
								SOCIAL
							</div>
							<ul className='mt-4 space-y-2 text-[14px] text-achromatic-0/80'>
								<li>X (Twitter)</li>
								<li>LinkedIn</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='mt-16 flex flex-col items-start justify-between gap-6 border-t border-achromatic-0/12 pt-10 md:flex-row md:items-center'>
					<div className='text-[12px] text-achromatic-0/55'>
						© {new Date().getFullYear()} SOLIDROAD INC. ALL RIGHTS RESERVED
					</div>
					<div className='text-[12px] text-achromatic-0/40'> </div>
				</div>
			</div>
		</footer>
	)
}

export default Footer

