import Icon from '@/shared/assets/icons'
import { IconNames } from '@/shared/constants/enums'
import GoButton from '../button/GoButton'
import GNB from './GNB'
import ScreenFrame from './ScreenFrame'

const Header = () => {
	return (
		<>
			<ScreenFrame />
			<div className='x-center bg-achromatic-0 fixed top-0 z-29 w-full max-w-[1000px] rounded-b-2xl pt-2 md:pt-4 shadow'>
				<div className='relative flex items-center justify-between p-2 md:p-4 gap-2'>
					<Icon
						name={IconNames.QUARTER}
						fill='var(--color-achromatic-0)'
						width={16}
						className='absolute top-0 -left-2 md:-left-4 z-10 -rotate-90 hidden md:block'
					/>
					<Icon
						name={IconNames.QUARTER}
						fill='var(--color-achromatic-0)'
						width={16}
						className='absolute top-0 -right-2 md:-right-4 z-10 rotate-180 hidden md:block'
					/>
					<div className='flex items-center gap-1.5 md:gap-2 flex-shrink-0 ml-2 md:ml-4'>
						<div className='text-[14px] md:text-[18px] font-semibold tracking-tight text-achromatic-900'>
							Vandora
						</div>
						<div className='rounded-full bg-primary-deepgreen/20 px-1.5 md:px-2.5 py-0.5 text-[9px] md:text-[11px] font-medium text-primary-deepgreen whitespace-nowrap'>
							Invite-only
						</div>
					</div>
					<div className='hidden md:block'>
						<GNB />
					</div>
					<div className='flex items-center gap-x-2 md:gap-x-4 flex-shrink-0'>
						<div className='px-2 md:px-3 py-1 text-[13px] md:text-[15px] hidden sm:block'>Sign in</div>
						<GoButton 
							className='bg-primary-saffron text-[12px] md:text-base mr-1 md:mr-2' 
							label='Request invite' 
							labelColor='var(--color-achromatic-900)'
							labelClassName='whitespace-nowrap'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
