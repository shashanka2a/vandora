import Image from 'next/image'
import Marquee from '@/shared/ui/animation/Marquee'

const TilesSection = () => {
	const buildItems = [
		'Solar',
		'Plumbing',
		'Electrical',
		'Insulation',
		'Heaters',
		'Water',
		'Batteries',
		'Fridges',
		'Wiring',
		'Vent fans',
	]

	return (
		<section className='mx-auto max-w-[1440px] px-4 pb-24'>
			<div className='mx-auto max-w-[1000px] text-center mb-12 md:mb-16'>
				<h2 className='text-balance text-[32px] leading-[112%] font-semibold tracking-tight text-achromatic-900 md:text-[40px]'>
					Built for the van life community
				</h2>
				<p className='mx-auto mt-5 max-w-[760px] text-pretty text-[16px] leading-[170%] text-achromatic-900/70 md:text-[18px]'>
					Vandora is designed by and for van-lifers who understand the unique challenges
					and joys of life on the road.
				</p>
			</div>
			<div className='mx-auto grid max-w-[1100px] gap-6 sm:grid-cols-2'>
				<div className='rounded-[34px] bg-achromatic-0 p-8 shadow-sm min-h-[500px]'>
					<div className='mb-7 relative overflow-hidden rounded-[26px] bg-gradient-to-br from-primary-saffron/10 to-primary-emeraid/5 h-[200px] flex items-center justify-center'>
						<Image
							alt='Vandora community icon'
							src='/images/vandora-icon.svg'
							width={200}
							height={200}
							className='opacity-100'
						/>
					</div>
					<div className='text-[28px] leading-[120%] font-semibold tracking-tight text-achromatic-900'>
						Built by van-lifers
					</div>
					<p className='mt-3 text-[14px] leading-[170%] text-achromatic-900/70'>
						Designed with the realities of life on the road: constant movement,
						tight-knit communities, and safety that can't be an afterthought.
					</p>
				</div>

				<div className='overflow-hidden rounded-[34px] bg-achromatic-0 shadow-sm relative min-h-[500px]'>
					<svg
						width='100%'
						height='100%'
						viewBox='0 0 534 400'
						className='absolute inset-0'
						preserveAspectRatio='xMidYMid cover'>
						<defs>
							<linearGradient id='landscapeGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
								<stop offset='0%' stopColor='#0d645b' stopOpacity='0.1' />
								<stop offset='50%' stopColor='#8b9e7d' stopOpacity='0.15' />
								<stop offset='100%' stopColor='#0d645b' stopOpacity='0.1' />
							</linearGradient>
						</defs>
						{/* Background */}
						<rect width='534' height='400' fill='url(#landscapeGradient)' />
						{/* Mountains silhouette */}
						<polygon
							points='0,300 100,200 200,250 300,180 400,220 534,200 534,400 0,400'
							fill='#0d645b'
							opacity='0.2'
						/>
						{/* Trees */}
						<g opacity='0.25'>
							<polygon points='80,350 90,280 100,350' fill='#0d645b' />
							<polygon points='120,360 125,300 130,360' fill='#0d645b' />
							<polygon points='150,355 155,290 160,355' fill='#0d645b' />
							<polygon points='380,355 385,290 390,355' fill='#0d645b' />
							<polygon points='420,360 425,300 430,360' fill='#0d645b' />
							<polygon points='450,350 460,280 470,350' fill='#0d645b' />
						</g>
						{/* Van silhouette */}
						<g transform='translate(200, 320)'>
							<rect x='0' y='0' width='60' height='35' rx='3' fill='#F2A154' opacity='0.3' />
							<rect x='5' y='5' width='20' height='15' rx='2' fill='#0d645b' opacity='0.4' />
							<circle cx='15' cy='35' r='5' fill='#0d645b' opacity='0.4' />
							<circle cx='45' cy='35' r='5' fill='#0d645b' opacity='0.4' />
						</g>
						{/* Road path */}
						<path
							d='M 0 380 Q 150 360, 267 340 Q 400 320, 534 300'
							stroke='#F2A154'
							strokeWidth='25'
							fill='none'
							opacity='0.2'
						/>
					</svg>
				</div>

				<div className='rounded-[34px] bg-primary-saffron/22 p-8 shadow-sm'>
					<div className='mb-7'>
						<Image
							alt=''
							src='/images/tile-safe.svg'
							width={420}
							height={320}
							className='h-[160px] w-full rounded-[26px] object-cover'
						/>
					</div>
					<div className='text-[28px] leading-[120%] font-semibold tracking-tight text-achromatic-900'>
						Engineered for safety
					</div>
					<p className='mt-3 text-[14px] leading-[170%] text-achromatic-900/70'>
						Invite-only access, verification, and community standards built to keep
						Vandora intentional, especially for solo travelers.
					</p>
				</div>

				<div className='rounded-[34px] bg-achromatic-0 p-8 shadow-sm'>
					<div className='mb-7 overflow-hidden rounded-[26px] bg-achromatic-900/[0.03]'>
						<div className='flex flex-wrap items-center gap-2 p-4'>
							{buildItems.map((name) => (
								<div
									key={name}
									className='flex items-center gap-2 rounded-full bg-achromatic-0 px-3 py-2 text-[12px] text-achromatic-900/70 shadow-[0_1px_0_rgba(14,34,14,0.06)]'>
									<span className='inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-emeraid/20 text-[11px] font-semibold text-primary-emeraid'>
										✓
									</span>
									<span className='whitespace-nowrap'>{name}</span>
								</div>
							))}
						</div>
					</div>
					<div className='text-[28px] leading-[120%] font-semibold tracking-tight text-achromatic-900'>
						Made for your
						<br />
						van build
					</div>
					<p className='mt-3 text-[14px] leading-[170%] text-achromatic-900/70'>
						Get builder help when you need it most through vetted helpers and paid
						sessions that respect your time and budget.
					</p>
				</div>
			</div>
		</section>
	)
}

export default TilesSection
