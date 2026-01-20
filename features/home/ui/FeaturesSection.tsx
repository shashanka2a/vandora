import GoButton from '@/shared/ui/button/GoButton'
import type { ReactNode } from 'react'

interface FeatureCard {
	eyebrow: string
	title: string
	description: string
	toneClassName: string
	illustration: ReactNode
}

const FeaturesSection = () => {
	const cards: FeatureCard[] = [
		{
			eyebrow: 'Auto QA',
			title: 'Review 100% of interactions in seconds.',
			description:
				'See the full picture of customer interactions across phone, live chat, video, and email support—at a glance.',
			toneClassName: 'bg-primary-saffron/22',
			illustration: (
				<div className='relative h-[260px] overflow-hidden rounded-[28px] bg-linear-to-b from-achromatic-0/60 to-achromatic-0/0'>
					<div className='absolute inset-0'>
						<div className='absolute -top-10 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-primary-saffron/30 blur-2xl' />
						<div className='absolute -bottom-16 left-10 h-[260px] w-[260px] rounded-full bg-primary-emeraid/22 blur-2xl' />
					</div>

					<div className='absolute left-8 top-8 h-[200px] w-[220px] rounded-2xl bg-achromatic-0/70 shadow-sm backdrop-blur'>
						<div className='p-5'>
							<div className='space-y-3'>
								<div className='h-2 w-28 rounded-full bg-achromatic-300/35' />
								<div className='h-2 w-36 rounded-full bg-achromatic-300/30' />
								<div className='h-2 w-24 rounded-full bg-achromatic-300/25' />
								<div className='h-2 w-40 rounded-full bg-achromatic-300/25' />
								<div className='h-2 w-32 rounded-full bg-achromatic-300/20' />
							</div>
						</div>
					</div>

					<div className='absolute right-8 top-[96px] w-[240px] rounded-2xl bg-achromatic-0 shadow-sm'>
						<div className='flex items-center justify-between px-5 py-4'>
							<div className='text-[14px] font-medium text-achromatic-900'>
								Auto QA score
							</div>
							<div className='flex items-center gap-2'>
								<div className='h-7 w-7 rounded-full bg-primary-saffron/60 ring-1 ring-primary-saffron/40' />
								<div className='text-[16px] font-semibold text-achromatic-900'>
									80
								</div>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			eyebrow: 'Training',
			title: 'Generate custom trainings for agents.',
			description:
				'Coach reps with AI simulations that look, act, and sound like your real customers, based on what you see in production.',
			toneClassName: 'bg-primary-emeraid/20',
			illustration: (
				<div className='relative h-[260px] overflow-hidden rounded-[28px] bg-linear-to-b from-achromatic-0/60 to-achromatic-0/0'>
					<div className='absolute inset-0'>
						<div className='absolute -top-14 right-10 h-[320px] w-[320px] rounded-full bg-primary-emeraid/30 blur-2xl' />
						<div className='absolute -bottom-20 left-16 h-[300px] w-[300px] rounded-full bg-primary-deepgreen/18 blur-2xl' />
					</div>

					<div className='absolute left-8 top-8 right-8 rounded-2xl bg-achromatic-0/80 p-5 shadow-sm backdrop-blur'>
						<div className='text-[14px] font-semibold text-achromatic-900'>
							Training Plan
						</div>
						<div className='mt-4 space-y-3'>
							<div className='flex items-center gap-3'>
								<div className='h-8 w-8 rounded-full bg-achromatic-300/30' />
								<div className='flex-1'>
									<div className='h-2 w-40 rounded-full bg-achromatic-300/35' />
									<div className='mt-2 h-2 w-28 rounded-full bg-achromatic-300/25' />
								</div>
							</div>
							<div className='flex items-start gap-3'>
								<div className='mt-1 h-8 w-8 rounded-xl bg-primary-emeraid/20 ring-1 ring-primary-emeraid/20' />
								<div className='flex-1'>
									<div className='h-2 w-[92%] rounded-full bg-achromatic-300/30' />
									<div className='mt-2 h-2 w-[70%] rounded-full bg-achromatic-300/25' />
								</div>
							</div>
							<div className='flex items-start gap-3'>
								<div className='mt-1 h-8 w-8 rounded-xl bg-primary-emeraid/20 ring-1 ring-primary-emeraid/20' />
								<div className='flex-1'>
									<div className='h-2 w-[86%] rounded-full bg-achromatic-300/25' />
									<div className='mt-2 h-2 w-[62%] rounded-full bg-achromatic-300/20' />
								</div>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			eyebrow: 'Performance',
			title: 'Watch customer satisfaction increase.',
			description:
				'QA and training work together to improve every conversation—whether human or AI—with clear scorecards and measurable lift.',
			toneClassName: 'bg-primary-deepgreen/12',
			illustration: (
				<div className='relative h-[260px] overflow-hidden rounded-[28px] bg-linear-to-b from-achromatic-0/60 to-achromatic-0/0'>
					<div className='absolute inset-0'>
						<div className='absolute -top-20 left-1/2 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-primary-emeraid/18 blur-2xl' />
						<div className='absolute -bottom-16 right-10 h-[260px] w-[260px] rounded-full bg-primary-saffron/18 blur-2xl' />
					</div>

					<div className='absolute left-8 top-8 right-8 rounded-2xl bg-achromatic-0/80 p-5 shadow-sm backdrop-blur'>
						<div className='flex items-center justify-between'>
							<div className='text-[14px] font-semibold text-achromatic-900'>
								Conversation performance
							</div>
							<div className='flex items-center gap-2 text-[12px] text-achromatic-900/70'>
								<span className='rounded-full bg-achromatic-900/6 px-2 py-1'>
									Reps
								</span>
								<span className='rounded-full bg-achromatic-900/6 px-2 py-1'>
									Bots
								</span>
							</div>
						</div>
						<div className='mt-6 grid grid-cols-6 items-end gap-2'>
							<div className='h-16 rounded-lg bg-primary-emeraid/70' />
							<div className='h-24 rounded-lg bg-primary-emeraid/40' />
							<div className='h-20 rounded-lg bg-primary-deepgreen/55' />
							<div className='h-28 rounded-lg bg-primary-emeraid/55' />
							<div className='h-[88px] rounded-lg bg-primary-deepgreen/45' />
							<div className='h-[120px] rounded-lg bg-primary-emeraid/65' />
						</div>
					</div>
				</div>
			),
		},
	]

	return (
		<section className='mx-auto max-w-[1440px] px-4 pb-24'>
			<div className='rounded-[40px] bg-achromatic-0 px-5 py-16 shadow-sm md:px-10'>
				<div className='mx-auto max-w-[1100px]'>
					<div className='text-center'>
						<div className='text-[13px] font-medium tracking-[0.12em] text-achromatic-900/60'>
							CLOSE THE LOOP
						</div>
						<h2 className='mt-4 text-balance text-[42px] leading-[110%] font-semibold tracking-tight text-achromatic-900 md:text-[56px]'>
							Close the loop from customer insight to agent improvement
						</h2>
						<p className='mx-auto mt-5 max-w-[760px] text-pretty text-[16px] leading-[160%] text-achromatic-900/70 md:text-[18px]'>
							Understand what actually happens in every interaction, turn it into
							targeted training, and measure impact—all in one workflow.
						</p>
					</div>

					<div className='mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
						{cards.map((card) => (
							<div
								key={card.title}
								className={[
									'group relative overflow-hidden rounded-[32px] p-7',
									card.toneClassName,
								].join(' ')}>
								<div className='absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									<div className='absolute inset-0 bg-linear-to-b from-achromatic-0/0 to-achromatic-0/20' />
								</div>

								<div className='relative'>
									{card.illustration}

									<div className='mt-7'>
										<div className='text-[13px] font-medium text-achromatic-900/70'>
											{card.eyebrow}
										</div>
										<div className='mt-3 text-[26px] leading-[120%] font-semibold tracking-tight text-achromatic-900'>
											{card.title}
										</div>
										<p className='mt-4 text-[15px] leading-[165%] text-achromatic-900/70'>
											{card.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className='mt-14 grid gap-4 rounded-3xl bg-achromatic-900/[0.03] p-6 md:grid-cols-3 md:gap-6 md:p-8'>
						<div>
							<div className='text-[15px] font-semibold text-achromatic-900'>
								Scorecards you can trust
							</div>
							<p className='mt-2 text-[14px] leading-[165%] text-achromatic-900/70'>
								Standardize evaluations across humans and bots with consistent,
								auditable criteria.
							</p>
						</div>
						<div>
							<div className='text-[15px] font-semibold text-achromatic-900'>
								AI simulations grounded in reality
							</div>
							<p className='mt-2 text-[14px] leading-[165%] text-achromatic-900/70'>
								Train on the conversations you actually have—not generic scripts—
								so improvements show up in production.
							</p>
						</div>
						<div>
							<div className='text-[15px] font-semibold text-achromatic-900'>
								Measure lift in days, not quarters
							</div>
							<p className='mt-2 text-[14px] leading-[165%] text-achromatic-900/70'>
								Track outcomes with clear signals: quality, handle time, and
								customer satisfaction.
							</p>
						</div>
					</div>

					<div className='mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row'>
						<GoButton
							className='bg-primary-saffron'
							label='Book a demo'
							labelColor='var(--color-achromatic-900)'
							labelClassName='whitespace-nowrap'
						/>
						<GoButton
							className='bg-primary-deepgreen'
							label='See how it works'
							labelColor='var(--color-achromatic-0)'
							labelClassName='whitespace-nowrap'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FeaturesSection

