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
			<div className='mx-auto grid max-w-[1100px] gap-6 sm:grid-cols-2'>
				<div className='rounded-[34px] bg-achromatic-0 p-8 shadow-sm'>
					<div className='mb-7'>
						<Image
							alt=''
							src='/images/tile-cx.svg'
							width={420}
							height={320}
							className='h-[160px] w-full rounded-[26px] object-cover'
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

				<div className='overflow-hidden rounded-[34px] bg-achromatic-0 shadow-sm'>
					<Image
						alt=''
						src='/images/tiles-landscape.svg'
						width={900}
						height={900}
						className='h-full w-full object-cover'
					/>
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
						Invite-only access, verification, and community standards—built to keep
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
						Get builder help when you need it most—through vetted helpers and paid
						sessions that respect your time and budget.
					</p>
				</div>
			</div>
		</section>
	)
}

export default TilesSection
