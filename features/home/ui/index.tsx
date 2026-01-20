import Icon from '@/shared/assets/icons'
import { IconNames } from '@/shared/constants/enums'
import Marquee from '@/shared/ui/animation/Marquee'
import GoButton from '@/shared/ui/button/GoButton'

const TITLE = ['A trusted community for', 'van-lifers to connect']
const SUBTITLE = [
	'Date other nomads. Meet friends through shared activities.',
	'Get trusted builder help—invite-only, with verification built in.',
]

const HomePageMain = () => {
	return (
		<div className='min-h-viewport relative'>
			<div className='text-achromatic-0 xy-center absolute text-center'>
				<div className='mb-3 text-[60px] leading-[110%] font-bold tracking-tight'>
					{TITLE.map((title, idx) => (
						<h1 key={idx}>{title}</h1>
					))}
				</div>
				<div className='text-[19px] leading-[130%] tracking-[-0.02em]'>
					{SUBTITLE.map((subtitle, idx) => (
						<p key={idx}>{subtitle}</p>
					))}
				</div>
				<div className='mt-12 flex justify-center'>
					<div className='bg-achromatic-0 flex items-center rounded-2xl p-1'>
						<div className='px-3'>
							<Icon
								name={IconNames.MAIL}
								width={24}
								height={24}
								fill='var(--color-achromatic-300)'
							/>
						</div>
						<input
							name='email'
							type='text'
							placeholder='Email address (request an invite)'
							className='w-[240px] border-none bg-transparent outline-none'
						/>
						<GoButton
							className='bg-primary-saffron'
							label='Request invite'
							labelColor='var(--color-achromatic-900)'
						/>
					</div>
				</div>
				<div className='mx-auto mt-4 max-w-[620px] text-[13px] leading-[150%] text-achromatic-0/80'>
					Invite-only to keep the community safe and intentional—especially for solo travelers.
				</div>
			</div>
			<div className='absolute bottom-[8%] left-0 w-full'>
				<Marquee baseVelocity={-0.4} repeatCount={2}>
					<div className='flex items-center gap-x-20 text-[40px]'>
						<span>Climbing</span>
						<span>Hiking</span>
						<span>Skiing</span>
						<span>Snowboarding</span>
						<span>Surfing</span>
						<span>Build nights</span>
						<span>Trailheads</span>
						<span>Campfires</span>
						<span>Route buddies</span>
					</div>
				</Marquee>
			</div>
		</div>
	)
}

export default HomePageMain
