import Icon from '@/shared/assets/icons'
import { IconNames } from '@/shared/constants/enums'

const ScreenFrame = () => {
	return (
		<div className='frame relative z-40'>
			{/* Top frame with notch */}
			<div className='bg-achromatic-0 fixed top-0 left-0 h-3 md:h-4 w-full'>
				<Icon
					name={IconNames.QUARTER}
					fill='var(--color-achromatic-0)'
					width={12}
					className='absolute top-3 md:top-4 left-3 md:left-4 z-10 rotate-180 md:w-4 md:h-4 w-3 h-3'
				/>
				<Icon
					name={IconNames.QUARTER}
					fill='var(--color-achromatic-0)'
					width={12}
					className='absolute top-3 md:top-4 right-3 md:right-4 z-10 -rotate-90 md:w-4 md:h-4 w-3 h-3'
				/>
			</div>
			{/* Bottom frame with notch */}
			<div className='bg-achromatic-0 fixed bottom-0 left-0 h-3 md:h-4 w-full'>
				<Icon
					name={IconNames.QUARTER}
					fill='var(--color-achromatic-0)'
					width={12}
					className='absolute bottom-full left-3 md:left-4 z-10 rotate-90 md:w-4 md:h-4 w-3 h-3'
				/>
				<Icon
					name={IconNames.QUARTER}
					fill='var(--color-achromatic-0)'
					width={12}
					className='absolute right-3 md:right-4 bottom-full z-10 rotate-0 md:w-4 md:h-4 w-3 h-3'
				/>
			</div>
			{/* Left side frame */}
			<div className='bg-achromatic-0 h-viewport fixed top-0 left-0 w-3 md:w-4' />
			{/* Right side frame */}
			<div className='bg-achromatic-0 h-viewport fixed top-0 right-0 w-3 md:w-4' />
		</div>
	)
}

export default ScreenFrame
