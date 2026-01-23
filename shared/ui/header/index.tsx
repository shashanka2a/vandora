import Icon from '@/shared/assets/icons'
import { IconNames } from '@/shared/constants/enums'
import GoButton from '../button/GoButton'
import GNB from './GNB'
import ScreenFrame from './ScreenFrame'

const Header = () => {
	return (
		<>
			<ScreenFrame />
			<div className='x-center bg-achromatic-0 fixed top-0 z-29 w-full max-w-[1000px] rounded-b-2xl pt-2 md:pt-4'>
				<div className='relative flex items-center justify-between p-3 md:p-4 gap-2'>
					<div className='flex items-center gap-1.5 md:gap-2 flex-shrink-0'>
						<div className='text-[16px] md:text-[18px] font-semibold tracking-tight text-achromatic-900'>
							Vandora
						</div>
						<div className='rounded-full bg-primary-deepgreen/20 px-2 md:px-2.5 py-0.5 text-[10px] md:text-[11px] font-medium text-primary-deepgreen whitespace-nowrap'>
							Invite-only
						</div>
					</div>
					<div className='hidden md:block'>
						<GNB />
					</div>
					<div className='flex items-center gap-x-2 md:gap-x-4 flex-shrink-0'>
						<div className='px-2 md:px-3 py-1 text-[13px] md:text-[15px] hidden sm:block'>Sign in</div>
						<GoButton 
							className='bg-primary-saffron text-[12px] md:text-base' 
							label='Request invite' 
							labelColor='var(--color-achromatic-900)'
							labelClassName='whitespace-nowrap'
						/>
						{/* Hamburger menu for mobile */}
						<button className='md:hidden p-2' aria-label='Menu'>
							<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5' stroke='#0d645b' strokeWidth='1.5' strokeLinecap='round'/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
