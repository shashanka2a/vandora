import type { ReactNode } from 'react'

interface Card {
	eyebrow: string
	title: string
	description: string
	toneClassName: string
	visual: ReactNode
}

const CloseLoopSection = () => {
	const cards: Card[] = [
		{
			eyebrow: 'Nomadic dating',
			title: 'Date people who are actually on the move.',
			description:
				'Match on travel intent, pace, and routes—so "where are you headed?" is built into the experience.',
			toneClassName: 'bg-primary-saffron/22',
			visual: (
				<div className='relative h-[190px] overflow-hidden rounded-[26px] bg-achromatic-0/70 shadow-sm'>
					<div className='absolute -top-12 left-10 h-[220px] w-[220px] rounded-full bg-primary-saffron/35 blur-2xl' />
					<div className='absolute -bottom-12 right-10 h-[220px] w-[220px] rounded-full bg-primary-emeraid/22 blur-2xl' />
					<div className='absolute inset-0 p-5'>
						<div className='flex items-center justify-between rounded-2xl bg-achromatic-0 px-4 py-3 shadow-[0_1px_0_rgba(14,34,14,0.06)]'>
							<div className='text-[14px] font-medium text-achromatic-900'>
								Route match
							</div>
							<div className='rounded-full bg-achromatic-900/8 px-3 py-1 text-[12px] font-medium text-achromatic-900/70'>
								92% overlap
							</div>
						</div>
						<div className='mt-4 grid gap-3'>
							<div className='h-10 rounded-2xl bg-achromatic-900/5' />
							<div className='h-10 rounded-2xl bg-achromatic-900/5' />
						</div>
					</div>
				</div>
			),
		},
		{
			eyebrow: 'Friends',
			title: 'Find friends through shared activities.',
			description:
				'Meet people for climbing, hiking, skiing, surfing—whatever your road season looks like.',
			toneClassName: 'bg-primary-emeraid/20',
			visual: (
				<div className='relative h-[190px] overflow-hidden rounded-[26px] bg-achromatic-0/70 shadow-sm'>
					<div className='absolute -top-14 right-10 h-[240px] w-[240px] rounded-full bg-primary-emeraid/30 blur-2xl' />
					<div className='absolute -bottom-12 left-12 h-[220px] w-[220px] rounded-full bg-primary-deepgreen/16 blur-2xl' />
					<div className='absolute inset-0 p-5'>
						<div className='text-[14px] font-semibold text-achromatic-900'>
							Upcoming
						</div>
						<div className='mt-4 space-y-3'>
							<div className='flex items-center justify-between rounded-2xl bg-achromatic-0 px-4 py-3 shadow-[0_1px_0_rgba(14,34,14,0.06)]'>
								<div className='text-[13px] font-medium text-achromatic-900'>
									Hike — sunrise loop
								</div>
								<div className='text-[12px] text-achromatic-900/60'>Tomorrow</div>
							</div>
							<div className='flex items-center justify-between rounded-2xl bg-achromatic-0 px-4 py-3 shadow-[0_1px_0_rgba(14,34,14,0.06)]'>
								<div className='text-[13px] font-medium text-achromatic-900'>
									Climb — boulders
								</div>
								<div className='text-[12px] text-achromatic-900/60'>This weekend</div>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			eyebrow: 'Builder help',
			title: 'Get trusted help with your build.',
			description:
				'Book paid sessions with vetted builders to troubleshoot electrical, plumbing, solar, and more.',
			toneClassName: 'bg-primary-deepgreen/12',
			visual: (
				<div className='relative h-[190px] overflow-hidden rounded-[26px] bg-achromatic-0/70 shadow-sm'>
					<div className='absolute -top-16 left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-primary-saffron/18 blur-2xl' />
					<div className='absolute -bottom-16 right-10 h-[240px] w-[240px] rounded-full bg-primary-emeraid/16 blur-2xl' />
					<div className='absolute inset-0 p-5'>
						<div className='flex items-center justify-between'>
							<div className='text-[14px] font-semibold text-achromatic-900'>
								Builder help
							</div>
							<div className='rounded-full bg-achromatic-900/8 px-3 py-1 text-[12px] font-medium text-achromatic-900/70'>
								Verified
							</div>
						</div>
						<div className='mt-4 grid gap-3'>
							<div className='h-10 rounded-2xl bg-achromatic-900/5' />
							<div className='h-10 rounded-2xl bg-achromatic-900/5' />
						</div>
					</div>
				</div>
			),
		},
	]

	return (
		<section id='contents' className='mx-auto max-w-[1440px] px-4 pb-24 pt-20'>
			<div className='mx-auto max-w-[1000px] text-center'>
				<h2 className='text-balance text-[40px] leading-[112%] font-semibold tracking-tight text-achromatic-900 md:text-[52px]'>
					Close the loop from plans to real connections
				</h2>
				<p className='mx-auto mt-5 max-w-[760px] text-pretty text-[16px] leading-[170%] text-achromatic-900/70 md:text-[18px]'>
					Vandora helps van-lifers meet intentionally—by aligning on movement, shared
					activities, and a safety-first community standard.
				</p>
			</div>

			<div className='mx-auto mt-14 max-w-[1100px]'>
				<div className='grid gap-6 md:grid-cols-3'>
					{cards.map((card) => (
						<div
							key={card.title}
							className={[
								'rounded-[34px] p-7 shadow-sm',
								'bg-achromatic-0',
								card.toneClassName,
							].join(' ')}>
							{card.visual}
							<div className='mt-7'>
								<div className='text-[13px] font-medium text-achromatic-900/70'>
									{card.eyebrow}
								</div>
								<div className='mt-3 text-[20px] leading-[125%] font-semibold tracking-tight text-achromatic-900'>
									{card.title}
								</div>
								<p className='mt-3 text-[14px] leading-[165%] text-achromatic-900/70'>
									{card.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default CloseLoopSection
