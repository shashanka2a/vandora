import Image from 'next/image'

const TilesSection = () => {
	return (
		<section className='mx-auto max-w-[1440px] px-4 pb-24'>
			<div className='grid gap-6 lg:grid-cols-2'>
				<div className='grid gap-6 sm:grid-cols-2'>
					<div className='rounded-[28px] bg-achromatic-0 p-8 shadow-sm'>
						<div className='mb-7'>
							<Image
								alt=''
								src='/images/tile-cx.svg'
								width={420}
								height={320}
								className='h-[140px] w-full rounded-[22px] object-cover'
							/>
						</div>
						<div className='text-[26px] leading-[120%] font-semibold tracking-tight text-achromatic-900'>
							Built by CX experts
						</div>
						<p className='mt-3 text-[14px] leading-[165%] text-achromatic-900/70'>
							Our team brings deep experience from category-leading CX companies.
							That expertise is translated into a platform built for speed, clarity,
							and operational excellence.
						</p>
					</div>

					<div className='overflow-hidden rounded-[28px] bg-achromatic-0 shadow-sm'>
						<Image
							alt=''
							src='/images/tiles-landscape.svg'
							width={900}
							height={900}
							className='h-full w-full object-cover'
						/>
					</div>

					<div className='rounded-[28px] bg-primary-saffron/22 p-8 shadow-sm'>
						<div className='mb-7'>
							<Image
								alt=''
								src='/images/tile-safe.svg'
								width={420}
								height={320}
								className='h-[140px] w-full rounded-[22px] object-cover'
							/>
						</div>
						<div className='text-[26px] leading-[120%] font-semibold tracking-tight text-achromatic-900'>
							Engineered for enterprises
						</div>
						<p className='mt-3 text-[14px] leading-[165%] text-achromatic-900/70'>
							Enterprise-ready by design. Solidroad is SOC 2 and ISO 27001 certified
							and adheres to strict security protocols to safeguard your data.
						</p>
					</div>

					<div className='rounded-[28px] bg-achromatic-0 p-8 shadow-sm'>
						<div className='mb-7 overflow-hidden rounded-[22px] bg-achromatic-900/[0.03]'>
							<div className='flex items-center gap-2 p-4'>
								{[
									'Zendesk',
									'Intercom',
									'Gladly',
									'Gong',
									'Decagon',
									'ServiceNow',
									'Notion',
									'HelpScout',
									'Gorgias',
									'Kustomer',
								].map((name) => (
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
						<div className='text-[26px] leading-[120%] font-semibold tracking-tight text-achromatic-900'>
							Made for your
							<br />
							CX stack
						</div>
						<p className='mt-3 text-[14px] leading-[165%] text-achromatic-900/70'>
							Solidroad integrates with your CX tech stack, connecting quality
							improvements across your entire agent ecosystem.
						</p>
					</div>
				</div>

				{/* spacing column to keep layout close to screenshot at larger widths */}
				<div className='hidden lg:block' />
			</div>
		</section>
	)
}

export default TilesSection

