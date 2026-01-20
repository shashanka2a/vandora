import { useEffect } from 'react'

/**
 * Hook to handle dynamic viewport size changes in mobile browsers due to address bar or toolbar height
 */
export const useViewport = () => {
	useEffect(() => {
		const setScreenSize = (): void => {
			const vh = window.innerHeight * 0.01
			document.documentElement.style.setProperty('--vh', `${vh}px`) // Define --vh property on html tag
		}

		setScreenSize()

		window.addEventListener('resize', setScreenSize)

		return () => {
			window.removeEventListener('resize', setScreenSize)
		}
	}, [])
}
