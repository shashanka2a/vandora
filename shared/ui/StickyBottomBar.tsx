'use client'

import Icon from '@/shared/assets/icons'
import { IconNames } from '@/shared/constants/enums'
import GoButton from '@/shared/ui/button/GoButton'

const scrollToId = (id: string) => {
	const el = document.getElementById(id)
	if (!el) return
	el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const dispatchCaseStudyNav = (delta: 1 | -1) => {
	window.dispatchEvent(
		new CustomEvent('caseStudies:navigate', { detail: { delta } }),
	)
}

const StickyBottomBar = () => {
	return (
		<div className='fixed inset-x-0 bottom-4 z-50 px-4'>
			<div className='mx-auto max-w-[1440px]'>
				<div className='rounded-[28px] bg-achromatic-0/70 p-2 shadow-sm ring-1 ring-achromatic-900/5 backdrop-blur'>
					<div className='grid grid-cols-[1fr_auto_1fr] items-center gap-3'>
						<div />

						<div className='rounded-[22px] bg-achromatic-0 p-2 shadow-sm'>
							<div className='flex items-center gap-3'>
								<GoButton
									type='button'
									className='bg-primary-saffron'
									label='Request invite'
									labelColor='var(--color-achromatic-900)'
									labelClassName='whitespace-nowrap'
									onClick={() => scrollToId('cta')}
								/>
								<GoButton
									type='button'
									className='bg-primary-deepgreen'
									label='Watch the brief'
									labelColor='var(--color-achromatic-0)'
									labelClassName='whitespace-nowrap'
									onClick={() => scrollToId('watch-brief')}
								/>
							</div>
						</div>

						<div className='flex items-center justify-end gap-3'>
							<button
								type='button'
								aria-label='Previous story'
								onClick={() => {
									scrollToId('story')
									dispatchCaseStudyNav(-1)
								}}
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
								aria-label='Next story'
								onClick={() => {
									scrollToId('story')
									dispatchCaseStudyNav(1)
								}}
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
				</div>
			</div>
		</div>
	)
}

export default StickyBottomBar

