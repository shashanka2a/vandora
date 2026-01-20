'use client'

import Icon from '@/shared/assets/icons'
import { IconNames } from '@/shared/constants/enums'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

interface Stat {
	value: string
	label: string
}

interface Study {
	company: string
	quote: string
	name: string
	title: string
	stats: Stat[]
}

const CaseStudySection = () => {
	const studies = useMemo<Study[]>(
		() => [
			{
				company: 'Vandora community',
				quote:
					'“It’s the first time I’ve met people who are actually moving like me—friends and dates that don’t disappear the moment I leave town.”',
				name: 'Quin Gable',
				title: 'Solo van-lifer',
				stats: [
					{ value: '3×', label: 'More meetups per month' },
					{ value: '72%', label: 'Matches with shared route intent' },
				],
			},
			{
				company: 'Beta cohort',
				quote:
					'“Activity matching changed everything. I found climbing partners in two days—and we’ve kept traveling together.”',
				name: 'Community member',
				title: 'Weekend climber',
				stats: [
					{ value: '48h', label: 'Average time to a meetup' },
					{ value: '4.8★', label: 'Safety & trust rating' },
				],
			},
		],
		[],
	)

	const [activeIdx, setActiveIdx] = useState(0)
	const [direction, setDirection] = useState<1 | -1>(1)

	const active = studies[activeIdx]

	const go = (delta: 1 | -1) => {
		setDirection(delta)
		setActiveIdx(prev => (prev + delta + studies.length) % studies.length)
	}

	useEffect(() => {
		const handler = (e: Event) => {
			const delta = (e as CustomEvent<{ delta: 1 | -1 }>).detail?.delta
			if (delta !== 1 && delta !== -1) return
			go(delta)
		}
		window.addEventListener('caseStudies:navigate', handler)
		return () => window.removeEventListener('caseStudies:navigate', handler)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<section className='mx-auto max-w-[1440px] px-4 pb-24'>
			<div className='overflow-hidden rounded-[44px] bg-primary-emeraid/18 p-8 shadow-sm md:p-12'>
				<div className='grid gap-10 lg:grid-cols-[520px_1fr] lg:items-start'>
					<div className='overflow-hidden rounded-[34px] bg-achromatic-0 shadow-sm'>
						<div
							className='h-[360px] w-full bg-cover bg-center'
							style={{ backgroundImage: "url('/images/case-roadrunner.svg')" }}
						/>
					</div>

					<div className='min-w-0'>
						<div className='flex items-start justify-between gap-6'>
							<div className='text-[15px] font-medium text-achromatic-900/70'>
								{active.company}{' '}
								<span className='inline-block translate-y-[-1px] text-achromatic-900/60'>
									&gt;
								</span>
							</div>

							<div className='flex items-center gap-3'>
								<button
									type='button'
									aria-label='Previous'
									onClick={() => go(-1)}
									className='flex h-11 w-11 items-center justify-center rounded-full bg-primary-saffron shadow-sm transition hover:brightness-[0.98]'>
									<Icon
										name={IconNames.ARROW2}
										width={18}
										fill='var(--color-achromatic-900)'
										className='-rotate-90'
									/>
								</button>
								<button
									type='button'
									aria-label='Next'
									onClick={() => go(1)}
									className='flex h-11 w-11 items-center justify-center rounded-full bg-primary-saffron shadow-sm transition hover:brightness-[0.98]'>
									<Icon
										name={IconNames.ARROW2}
										width={18}
										fill='var(--color-achromatic-900)'
										className='rotate-90'
									/>
								</button>
							</div>
						</div>

						<div className='mt-10'>
							<AnimatePresence mode='popLayout' initial={false} custom={direction}>
								<motion.div
									key={active.quote}
									custom={direction}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.25, ease: 'easeOut' }}>
									<div className='text-balance text-[28px] leading-[122%] font-semibold tracking-tight text-achromatic-900 md:text-[34px]'>
										{active.quote}
									</div>

									<div className='mt-7 flex items-center gap-4'>
										<div className='h-12 w-12 shrink-0 rounded-full bg-achromatic-0/80 ring-1 ring-achromatic-900/10'>
											<div className='flex h-full w-full items-center justify-center text-[14px] font-semibold text-achromatic-900/70'>
												{active.name
													.split(' ')
													.slice(0, 2)
													.map(s => s[0])
													.join('')}
											</div>
										</div>
										<div className='min-w-0'>
											<div className='text-[15px] font-semibold text-achromatic-900'>
												{active.name}
											</div>
											<div className='text-[14px] text-achromatic-900/60'>
												{active.title}
											</div>
										</div>

										<div className='ml-auto hidden items-center gap-3 md:flex'>
											<div className='text-[14px] font-medium text-achromatic-900'>
												Story
											</div>
											<span className='flex h-9 w-9 items-center justify-center rounded-full bg-achromatic-900/10'>
												<Icon
													name={IconNames.ARROW2}
													width={16}
													fill='var(--color-achromatic-900)'
													className='rotate-90'
												/>
											</span>
										</div>
									</div>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>

				<div className='mt-12 grid gap-8 md:grid-cols-2'>
					{active.stats.map((stat, idx) => (
						<div
							key={stat.value}
							className={[
								'pt-8',
								idx === 0 ? '' : 'md:border-l md:border-achromatic-900/10 md:pl-10',
							].join(' ')}>
							<div className='text-[54px] leading-none font-semibold tracking-tight text-achromatic-900'>
								{stat.value}
							</div>
							<div className='mt-2 text-[15px] text-achromatic-900/60'>{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default CaseStudySection

