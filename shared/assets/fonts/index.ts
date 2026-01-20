import localFont from 'next/font/local'

export const pretendard = localFont({
	src: [
		{
			path: './pretendard/Pretendard-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: './pretendard/Pretendard-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './pretendard/Pretendard-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './pretendard/Pretendard-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './pretendard/Pretendard-Black.woff2',
			weight: '900',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-first',
})
