import Icon from '@/shared/assets/icons'
import BI from '@/shared/assets/icons/logo/BI'
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
					<div className='xy-center absolute flex items-center gap-1'>
						<BI width={38} />
					</div>
					<div>
						<GNB />
					</div>
					<div className='flex items-center gap-x-4'>
						<div className='px-3 py-1 text-[15px]'>Sign in</div>
						<GoButton
							className='bg-primary-emeraid'
							label='See a Demo'
							labelClassName='w-[100px]'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
