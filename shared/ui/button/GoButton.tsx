import Icon from '@/shared/assets/icons'
import { IconNames } from '@/shared/constants/enums'
import { FC, HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLButtonElement> & {
	label: string
	labelColor?: string
}
const GoButton: FC<Props> = ({
	className,
	label,
	labelColor = 'var(--color-achromatic-0)',
	...props
}) => {
	return (
		<button
			className={[
				'text-achromatic-0 flex h-12 items-center gap-x-2 rounded-xl px-4',
				className || '',
			].join(' ')}
			{...props}>
			<div style={{ color: labelColor }} className={'font-medium'}>
				{label}
			</div>
			<div className='bg-achromatic-0/14 flex size-6 items-center justify-center rounded-full'>
				<Icon
					name={IconNames.ARROW2}
					width={16}
					fill={labelColor}
					className='rotate-90'
				/>
			</div>
		</button>
	)
}

export default GoButton
