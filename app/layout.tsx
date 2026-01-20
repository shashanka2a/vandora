import { pretendard } from '@/shared/assets/fonts'
import IconSprite from '@/shared/assets/icons/Sprite'
import '@/shared/styles/index.css'
import ClientHooks from '@/shared/ui/ClientHooks'
import type { Metadata } from 'next'
import { type ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Solidroad | AI Optimization for Human and AI Agents',
	description:
		'The Automated Quality Management platform that optimizes human and AI agents to make every customer interaction better, faster, and more consistent. ',
}

interface RootLayoutProps {
	children: ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {
	return (
		<html lang={'en'}>
			<body
				className={[
					'bg-background text-achromatic-900 antialiased',
					pretendard.variable,
				].join(' ')}>
				<IconSprite />
				<ClientHooks />
				{children}
			</body>
		</html>
	)
}

export default RootLayout
