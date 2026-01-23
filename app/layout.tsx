import { pretendard } from '@/shared/assets/fonts'
import IconSprite from '@/shared/assets/icons/Sprite'
import '@/shared/styles/index.css'
import ClientHooks from '@/shared/ui/ClientHooks'
import type { Metadata } from 'next'
import { type ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Vandora | A trusted community for van-lifers',
	description:
		'Vandora is an invite-only, safety-first community for van-lifers to date other nomads, find friends by shared activities, and get trusted builder help for van projects.',
	icons: {
		icon: '/images/vandora-icon.svg',
	},
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
