import Icon from '@/shared/assets/icons'
import { IconNames } from '@/shared/constants/enums'
import Marquee from '@/shared/ui/animation/Marquee'
import GoButton from '@/shared/ui/button/GoButton'

const TITLE = ['Train and QA your', 'human and AI agents']
const SUBTITLE = [
	'Make every customer interaction better, faster, and more consistent',
	'with the optimization platform for human and AI agents.',
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
							placeholder='Email address'
							className='w-[240px] border-none bg-transparent outline-none'
						/>
						<GoButton
							className='bg-primary-saffron'
							label='See a Demo'
							labelColor='var(--color-achromatic-900)'
							labelClassName='w-[100px]'
						/>
					</div>
				</div>
			</div>
			<div className='absolute bottom-[8%] left-0 w-full'>
				<Marquee baseVelocity={-0.4} repeatCount={2}>
					<div className='flex items-center gap-x-20 text-[40px]'>
						<span>FINOM</span>
						<span>amenitiz</span>
						<span>fever</span>
						<span>faire</span>
						<span>activeCamaign</span>
						<span>WorkWhile</span>
						<span>crypto.com</span>
						<span>Podium</span>
						<span>RYANAIR</span>
					</div>
				</Marquee>
			</div>
		</div>
	)
}

export default HomePageMain
