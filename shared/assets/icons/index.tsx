import { IconNames } from '@/shared/constants/enums'
import { type FC, type SVGAttributes } from 'react'

type Props = SVGAttributes<SVGSVGElement> & {
	name: (typeof IconNames)[keyof typeof IconNames] | undefined
}
const Icon: FC<Props> = props => {
	const { name, className, viewBox = '0 0 24 24', width = 24, ...rest } = props

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={width}
			viewBox={viewBox}
			className={className ? className : ''}
			{...rest}>
			<use href={`#${name}`} />
		</svg>
	)
}
export default Icon
