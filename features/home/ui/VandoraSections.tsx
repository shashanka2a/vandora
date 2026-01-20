import GoButton from '@/shared/ui/button/GoButton'

const VandoraSections = () => {
	return (
		<div className='mx-auto max-w-[1440px] px-4 pb-24 pt-20'>
			<section className='rounded-[44px] bg-achromatic-0 p-8 shadow-sm md:p-12'>
				<div className='grid gap-10 md:grid-cols-2 md:items-start'>
					<div>
						<div className='text-[13px] font-medium tracking-[0.12em] text-achromatic-900/55'>
							BUILT FOR LIFE ON THE ROAD
						</div>
						<h2 className='mt-4 text-balance text-[34px] leading-[112%] font-semibold tracking-tight text-achromatic-900 md:text-[44px]'>
							Meet people who actually get the van-life lifestyle
						</h2>
						<p className='mt-4 text-pretty text-[16px] leading-[165%] text-achromatic-900/70'>
							Dating and making friends is hard when you’re always moving. Vandora is
							designed for nomads—so matches are based on routes, shared activities,
							and intent (not just who’s within five miles of a zip code).
						</p>
						<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
							<GoButton className='bg-primary-saffron' label='Request invite' />
							<GoButton className='bg-primary-deepgreen' label='Watch the brief' />
						</div>
					</div>

					<div className='grid gap-4 sm:grid-cols-2'>
						<div className='rounded-3xl bg-primary-emeraid/18 p-6'>
							<div className='text-[14px] font-semibold text-achromatic-900'>
								Nomadic dating
							</div>
							<p className='mt-2 text-[14px] leading-[165%] text-achromatic-900/70'>
								Find people who want to travel too—aligned on pace, style, and season.
							</p>
						</div>
						<div className='rounded-3xl bg-primary-saffron/20 p-6'>
							<div className='text-[14px] font-semibold text-achromatic-900'>
								Activity-based friends
							</div>
							<p className='mt-2 text-[14px] leading-[165%] text-achromatic-900/70'>
								Match through what you do: climbing, hiking, skiing, surfing, and more.
							</p>
						</div>
						<div className='rounded-3xl bg-achromatic-900/[0.03] p-6 sm:col-span-2'>
							<div className='flex items-start justify-between gap-6'>
								<div>
									<div className='text-[14px] font-semibold text-achromatic-900'>
										Builder help (paid)
									</div>
									<p className='mt-2 text-[14px] leading-[165%] text-achromatic-900/70'>
										Get trusted guidance on your build—from electrical to plumbing—
										with vetted helpers and clear expectations.
									</p>
								</div>
								<div className='shrink-0 rounded-full bg-achromatic-900/8 px-3 py-2 text-[12px] font-medium text-achromatic-900/70'>
									Coming soon
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='mt-8 rounded-[44px] bg-primary-deepgreen p-8 text-achromatic-0 shadow-sm md:p-12'>
				<div className='grid gap-10 md:grid-cols-2 md:items-start'>
					<div>
						<div className='text-[13px] font-medium tracking-[0.12em] text-achromatic-0/60'>
							SAFETY-FIRST
						</div>
						<h3 className='mt-4 text-balance text-[32px] leading-[112%] font-semibold tracking-tight md:text-[40px]'>
							Invite-only and verified access—by default
						</h3>
						<p className='mt-4 text-pretty text-[15px] leading-[170%] text-achromatic-0/75'>
							Van life is a small, protective community. Vandora is designed to keep
							it safe and intentional, especially for solo travelers.
						</p>
					</div>

					<div className='grid gap-3'>
						<div className='rounded-3xl bg-achromatic-0/10 p-5'>
							<div className='text-[14px] font-semibold'>Verification</div>
							<div className='mt-1 text-[14px] text-achromatic-0/75'>
								Verified profiles, optional references, and clear trust signals.
							</div>
						</div>
						<div className='rounded-3xl bg-achromatic-0/10 p-5'>
							<div className='text-[14px] font-semibold'>Community standards</div>
							<div className='mt-1 text-[14px] text-achromatic-0/75'>
								Boundaries-first messaging, reporting, and fast enforcement.
							</div>
						</div>
						<div className='rounded-3xl bg-achromatic-0/10 p-5'>
							<div className='text-[14px] font-semibold'>Intent matters</div>
							<div className='mt-1 text-[14px] text-achromatic-0/75'>
								Match on where you’re headed and what you’re into—not just proximity.
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default VandoraSections

