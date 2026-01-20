import Icon from '@/shared/assets/icons'
import { IconNames } from '@/shared/constants/enums'
import GoButton from '../button/GoButton'
import GNB from './GNB'
import ScreenFrame from './ScreenFrame'

const Header = () => {
	return (
		<>
			<ScreenFrame />
			<div className='x-center bg-achromatic-0 fixed top-0 z-29 w-[1000px] rounded-b-2xl pt-4 shadow'>
				<div className='relative flex items-center justify-between p-4'>
					<Icon
						name={IconNames.QUARTER}
						fill='var(--color-achromatic-0)'
						width={16}
						className='absolute top-0 -left-4 z-10 -rotate-90'
					/>
					<Icon
						name={IconNames.QUARTER}
						fill='var(--color-achromatic-0)'
						width={16}
						className='absolute top-0 -right-4 z-10 rotate-180'
					/>
					<div className='xy-center absolute flex items-center gap-2'>
						<div className='text-[18px] font-semibold tracking-tight text-achromatic-900'>
							Vandora
						</div>
						<div className='rounded-full bg-achromatic-900/8 px-2 py-1 text-[11px] font-medium text-achromatic-900/70'>
							Invite-only
						</div>
					</div>
					<div>
						<GNB />
					</div>
					<div className='flex items-center gap-x-4'>
						<div className='px-3 py-1 text-[15px]'>Sign in</div>
						<GoButton className='bg-primary-emeraid' label='Request invite' />
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
