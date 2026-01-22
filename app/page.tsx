import HomePageMain from '@/features/home/ui'
import CloseLoopSection from '@/features/home/ui/CloseLoopSection'
import TilesSection from '@/features/home/ui/TilesSection'
import VisualBg from '@/features/home/ui/VisualBg'
import Header from '@/shared/ui/header'
import Footer from '@/shared/ui/footer/Footer'

const HomePage = () => {
	return (
		<>
			<Header />
			<div className='relative overflow-hidden'>
				<VisualBg />
				<div className='p-4'>
					<HomePageMain />
				</div>
			</div>
			<CloseLoopSection />
			<TilesSection />
			<Footer />
		</>
	)
}

export default HomePage
