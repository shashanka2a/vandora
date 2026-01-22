import Image from 'next/image'

const MidProofSection = () => {
	return (
		<section className='mx-auto max-w-[1440px] px-4 pb-24 pt-2'>
			<div className='mx-auto max-w-[1100px]'>
				<p className='text-balance text-[22px] leading-[145%] tracking-[-0.02em] text-achromatic-900/65 md:text-[28px]'>
					Vandora is built to{' '}
					<span className='text-achromatic-900'>
						raise the bar for how van-lifers connect
					</span>
					, combining{' '}
					<span className='text-achromatic-900 font-semibold'>
						nomadic dating
					</span>
					,{' '}
					<span className='text-achromatic-900 font-semibold'>
						activity-based friend finding
					</span>
					, and{' '}
					<span className='text-achromatic-900 font-semibold'>trusted builder help</span>{' '}
					in one safety-first community.
				</p>

				<div className='mt-10 flex flex-wrap items-end gap-5 md:gap-6'>
					{[
						{ src: '/images/portrait-1.svg', alt: '' },
						{ src: '/images/portrait-2.svg', alt: '' },
						{ src: '/images/portrait-3.svg', alt: '' },
						{ src: '/images/portrait-4.svg', alt: '' },
					].map((img, idx) => (
						<div
							key={img.src}
							className={[
								'overflow-hidden rounded-[26px] shadow-[0_1px_0_rgba(14,34,14,0.06)]',
								idx === 0 ? 'h-[140px] w-[160px]' : 'h-[140px] w-[160px]',
							].join(' ')}>
							<Image
								src={img.src}
								alt={img.alt}
								width={240}
								height={240}
								className='h-full w-full object-cover'
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default MidProofSection

