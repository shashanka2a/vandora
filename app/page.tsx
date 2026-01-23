import HomePageMain from '@/features/home/ui'
import CloseLoopSection from '@/features/home/ui/CloseLoopSection'
import VisualBg from '@/features/home/ui/VisualBg'
import Header from '@/shared/ui/header'
import Footer from '@/shared/ui/footer/Footer'

const HomePage = () => {
	return (
		<>
			<Header />
			<div className='relative overflow-hidden w-full'>
				<VisualBg />
				<HomePageMain />
			</div>
			<CloseLoopSection />
			<Footer />
		</>
	)
}

export default HomePage
