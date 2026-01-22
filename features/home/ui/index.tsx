import Icon from '@/shared/assets/icons'
import { IconNames } from '@/shared/constants/enums'
import GoButton from '@/shared/ui/button/GoButton'
import Image from 'next/image'

const TITLE = ['Meet people who', 'actually get van life']
const SUBTITLE = [
	"Dating and making friends is hard when you're always moving.",
	'Vandora is designed for nomads, so matches are based on routes, shared activities, and intent.',
]

const HomePageMain = () => {
	return (
		<div className='h-[85vh] relative'>
			{/* Hero Illustration */}
			<div className='absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none'>
				<div className='relative w-full h-full'>
					<Image
						src='/images/hero.png'
						alt='Van life landscape illustration'
						fill
						className='object-cover opacity-50'
						priority
					/>
				</div>
			</div>
			<div className='text-achromatic-0 xy-center absolute text-center z-10 px-4 w-full max-w-[1000px]'>
				<div className='mb-3 text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[110%] font-bold tracking-tight'>
					{TITLE.map((title, idx) => (
						<h1 key={idx}>{title}</h1>
					))}
				</div>
				<div className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] leading-[130%] tracking-[-0.02em]'>
					{SUBTITLE.map((subtitle, idx) => (
						<p key={idx}>{subtitle}</p>
					))}
				</div>
				<div className='mt-12 flex justify-center'>
					<div className='bg-achromatic-0 flex items-center rounded-2xl p-1 max-w-[600px] w-full mx-4'>
						<div className='px-3 flex-shrink-0'>
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
							className='flex-1 min-w-0 border-none bg-transparent outline-none text-achromatic-900 placeholder:text-achromatic-300'
						/>
						<GoButton
							className='bg-primary-saffron flex-shrink-0 mr-1'
							label='Request invite'
							labelColor='var(--color-achromatic-900)'
							labelClassName='whitespace-nowrap'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePageMain
