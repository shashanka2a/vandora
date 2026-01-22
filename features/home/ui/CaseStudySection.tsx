'use client'

import BI from '@/shared/assets/icons/logo/BI'
import Icon from '@/shared/assets/icons'
import { IconNames } from '@/shared/constants/enums'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

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
	image: string
}

const CaseStudySection = () => {
	const studies = useMemo<Study[]>(
		() => [
			{
				company: 'Podium',
				quote:
					'"We now know agents meet our quality bar before they ever touch a customer. That\'s the difference."',
				name: 'Marissa Taylor',
				title: 'Manager Product Support',
				image: '/images/case-roadrunner.svg',
				stats: [
					{ value: '50%', label: 'Faster time to quality threshold' },
					{ value: '33%', label: 'Increase in resolution speed' },
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
		<section id='case-studies' className='mx-auto max-w-[1440px] px-4 pb-24'>
			<div className='overflow-hidden rounded-[44px] border border-achromatic-900/10 bg-[#ECF0EC] p-8 shadow-sm md:p-12'>
				<div className='grid gap-10 lg:grid-cols-[520px_1fr] lg:items-start'>
					<div className='overflow-hidden rounded-[24px] bg-[#BFE7E6] shadow-sm'>
						<div className='relative h-[640px] w-full'>
							<Image
								src={active.image}
								alt=''
								fill
								className='object-cover'
							/>
						</div>
					</div>

					<div className='min-w-0'>
						<div className='flex items-start justify-between gap-6'>
							<div className='flex items-center gap-3'>
								<BI width={100} fill='var(--color-achromatic-900)' />
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
										<div className='h-16 w-16 shrink-0 overflow-hidden rounded-full bg-achromatic-0/80 ring-1 ring-achromatic-900/10'>
											<Image
												src='https://framerusercontent.com/images/w4qd16L32tOp9zsaQJyBl4HTqFY.webp?width=64&height=64'
												alt={active.name}
												width={64}
												height={64}
												className='h-full w-full object-cover'
											/>
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
												Case study
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
