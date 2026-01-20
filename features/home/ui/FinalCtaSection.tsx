'use client'

import GoButton from '@/shared/ui/button/GoButton'
import { useState } from 'react'

const FinalCtaSection = () => {
	const [email, setEmail] = useState('')

	return (
		<section className='mx-auto max-w-[1440px] px-4 pb-0'>
			<div className='rounded-[44px] bg-primary-deepgreen px-6 pb-16 pt-14 shadow-sm md:px-10 md:pb-20'>
				<div className='mx-auto max-w-[1100px] text-center'>
					<h2 className='text-balance text-[44px] leading-[112%] font-semibold tracking-tight text-achromatic-0 md:text-[56px]'>
						Raise the bar for every
						<br />
						road connection
					</h2>

					<div className='mt-10 flex justify-center'>
						<div className='flex w-full max-w-[520px] items-center gap-2 rounded-2xl bg-achromatic-0 p-2 shadow-sm'>
							<input
								value={email}
								onChange={e => setEmail(e.target.value)}
								name='email'
								type='email'
								placeholder='Email address'
								className='h-12 flex-1 rounded-xl border-none bg-transparent px-4 outline-none'
							/>
							<GoButton
								type='button'
								className='bg-primary-saffron'
								label='Request invite'
								labelColor='var(--color-achromatic-900)'
								labelClassName='whitespace-nowrap'
							/>
						</div>
					</div>
				</div>

				<div className='mx-auto mt-12 max-w-[1200px] overflow-hidden rounded-[34px] bg-achromatic-0/10'>
					<div
						className='h-[360px] w-full bg-cover bg-center'
						style={{ backgroundImage: "url('/images/cta-mountains.svg')" }}
					/>
				</div>
			</div>
		</section>
	)
}

export default FinalCtaSection

