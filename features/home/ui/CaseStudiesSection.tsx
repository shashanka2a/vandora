'use client'

import Icon from '@/shared/assets/icons'
import { IconNames } from '@/shared/constants/enums'
import GoButton from '@/shared/ui/button/GoButton'
import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useMemo, useState } from 'react'

interface CaseStudyStat {
	value: string
	label: string
}

interface CaseStudyPerson {
	name: string
	title: string
}

interface CaseStudy {
	company: string
	quote: string
	person: CaseStudyPerson
	stats: CaseStudyStat[]
	bgClassName: string
	illustration: ReactNode
}

const CaseStudiesSection = () => {
	const studies = useMemo<CaseStudy[]>(
		() => [
			{
				company: 'ActiveCampaign',
				quote:
					'“We finally have consistent visibility into quality across every region. And we can verify readiness before agents go live, not after.”',
				person: {
					name: 'Destiny Young',
					title: 'Sr. Manager, Experience Quality Programs',
				},
				stats: [
					{ value: '1 Hour', label: 'Saved per simulation' },
					{ value: '2000+', label: 'Hours of training completed' },
				],
				bgClassName: 'bg-primary-emeraid/20',
				illustration: (
					<div className='relative h-[420px] w-full overflow-hidden rounded-[36px] bg-achromatic-0 shadow-sm'>
						<div
							className='absolute inset-0 bg-cover bg-center'
							style={{ backgroundImage: "url('/images/case-roadrunner.svg')" }}
						/>
						<div className='absolute inset-0 bg-linear-to-b from-transparent to-achromatic-900/20' />
					</div>
				),
			},
			{
				company: 'Fever',
				quote:
					'“We unified QA across teams and channels. Training became measurable—and the results showed up immediately in CSAT.”',
				person: {
					name: 'Jordan Lee',
					title: 'Director, Customer Experience',
				},
				stats: [
					{ value: '32%', label: 'Faster ramp to proficiency' },
					{ value: '18%', label: 'Increase in QA pass rate' },
				],
				bgClassName: 'bg-primary-saffron/22',
				illustration: (
					<div className='relative h-[420px] w-full overflow-hidden rounded-[36px] bg-achromatic-0 shadow-sm'>
						<div className='absolute inset-0 bg-linear-to-br from-primary-saffron/45 via-achromatic-0 to-primary-emeraid/25' />
						<div className='absolute inset-0 opacity-[0.14] [background-image:radial-gradient(circle_at_1px_1px,rgba(14,34,14,0.6)_1px,transparent_0)] [background-size:18px_18px]' />
						<div className='absolute left-10 top-10 h-[220px] w-[220px] rounded-[42px] bg-achromatic-0/70 shadow-sm backdrop-blur' />
						<div className='absolute bottom-10 right-10 h-[260px] w-[260px] rounded-full bg-primary-emeraid/20 blur-2xl' />
					</div>
				),
			},
			{
				company: 'Faire',
				quote:
					'“The combination of scorecards and simulations made coaching feel fair, consistent, and repeatable across the org.”',
				person: {
					name: 'Avery Chen',
					title: 'Head of Support Operations',
				},
				stats: [
					{ value: '4.6★', label: 'Average quality rating' },
					{ value: '9 days', label: 'Median time to improvement' },
				],
				bgClassName: 'bg-primary-deepgreen/12',
				illustration: (
					<div className='relative h-[420px] w-full overflow-hidden rounded-[36px] bg-achromatic-0 shadow-sm'>
						<div className='absolute inset-0 bg-linear-to-br from-primary-deepgreen/18 via-achromatic-0 to-primary-saffron/16' />
						<div className='absolute -top-16 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-primary-emeraid/18 blur-2xl' />
						<div className='absolute bottom-10 left-10 h-[160px] w-[300px] rounded-[28px] bg-achromatic-0/70 shadow-sm backdrop-blur' />
					</div>
				),
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

	return (
		<section className='mx-auto max-w-[1440px] px-4 pb-28'>
			<div className={['relative overflow-hidden rounded-[44px] p-8 md:p-12', active.bgClassName].join(' ')}>
				<div className='grid gap-10 lg:grid-cols-[520px_1fr] lg:items-start'>
					<div className='min-w-0'>{active.illustration}</div>

					<div className='min-w-0'>
						<div className='flex items-start justify-between gap-6'>
							<div className='text-[16px] font-medium text-achromatic-900/80'>
								{active.company}{' '}
								<span className='inline-block translate-y-[-1px] text-achromatic-900/70'>
									&gt;
								</span>
							</div>

							<div className='flex items-center gap-3'>
								<button
									type='button'
									aria-label='Previous case study'
									onClick={() => go(-1)}
									className='flex h-11 w-11 items-center justify-center rounded-full bg-primary-saffron/85 shadow-sm transition hover:bg-primary-saffron'>
									<Icon
										name={IconNames.ARROW2}
										width={18}
										fill='var(--color-achromatic-900)'
										className='-rotate-90'
									/>
								</button>
								<button
									type='button'
									aria-label='Next case study'
									onClick={() => go(1)}
									className='flex h-11 w-11 items-center justify-center rounded-full bg-primary-saffron/85 shadow-sm transition hover:bg-primary-saffron'>
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
									key={active.company}
									custom={direction}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.25, ease: 'easeOut' }}
									className='min-w-0'>
									<div className='text-balance text-[30px] leading-[120%] font-semibold tracking-tight text-achromatic-900 md:text-[34px]'>
										{active.quote}
									</div>

									<div className='mt-7 flex items-center gap-4'>
										<div className='h-12 w-12 shrink-0 rounded-full bg-achromatic-0/70 ring-1 ring-achromatic-900/10'>
											<div className='flex h-full w-full items-center justify-center text-[14px] font-semibold text-achromatic-900/70'>
												{active.person.name
													.split(' ')
													.slice(0, 2)
													.map(s => s[0])
													.join('')}
											</div>
										</div>
										<div className='min-w-0'>
											<div className='text-[15px] font-semibold text-achromatic-900'>
												{active.person.name}
											</div>
											<div className='text-[14px] text-achromatic-900/60'>
												{active.person.title}
											</div>
										</div>
									</div>

									<div className='mt-10 flex items-center justify-between gap-4'>
										<div />
										<button
											type='button'
											className='group inline-flex items-center gap-3 text-[15px] font-medium text-achromatic-900'>
											<span>Case study</span>
											<span className='flex h-9 w-9 items-center justify-center rounded-full bg-achromatic-900/10 transition group-hover:bg-achromatic-900/15'>
												<Icon
													name={IconNames.ARROW2}
													width={16}
													fill='var(--color-achromatic-900)'
													className='rotate-90'
												/>
											</span>
										</button>
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

				<div className='pointer-events-none absolute inset-x-0 -bottom-7 flex justify-center'>
					<div className='pointer-events-auto rounded-[22px] bg-achromatic-0 p-2 shadow-sm'>
						<div className='flex items-center gap-3'>
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
			</div>
		</section>
	)
}

export default CaseStudiesSection

