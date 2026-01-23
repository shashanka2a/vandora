import Image from 'next/image'

const TITLE = ['Meet people who', 'actually get van life']
const SUBTITLE = [
	"Dating and making friends is hard when you're always moving.",
	'Vandora is designed for nomads, so matches are based on routes, shared activities, and intent.',
]

const HomePageMain = () => {
	return (
		<div className='h-[100dvh] relative overflow-hidden w-full'>
			{/* Hero Illustration */}
			<div className='absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none'>
				<div className='relative w-full h-full'>
					<Image
						src='/images/hero.png'
						alt='Van life landscape illustration'
						fill
						className='object-cover opacity-80'
						priority
					/>
				</div>
			</div>
			{/* Text Content - Positioned between sun and van */}
			<div className='text-achromatic-0 absolute text-center z-10 px-4 w-full max-w-[1000px] left-1/2 -translate-x-1/2 pt-32 md:pt-32 top-[15%] md:top-[20%]'>
				<div className='mb-4 md:mb-5 text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[110%] font-extrabold tracking-tight'>
					{TITLE.map((title, idx) => (
						<h1 key={idx} className='drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'>{title}</h1>
					))}
				</div>
				<div className='text-[15px] sm:text-[16px] md:text-[18px] lg:text-[19px] leading-[140%] md:leading-[130%] tracking-[-0.02em] font-medium'>
					{SUBTITLE.map((subtitle, idx) => (
						<p key={idx} className='drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]'>{subtitle}</p>
					))}
				</div>
			</div>
		</div>
	)
}

export default HomePageMain
