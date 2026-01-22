import HomePageMain from '@/features/home/ui'
import CaseStudySection from '@/features/home/ui/CaseStudySection'
import CloseLoopSection from '@/features/home/ui/CloseLoopSection'
import FinalCtaSection from '@/features/home/ui/FinalCtaSection'
import TilesSection from '@/features/home/ui/TilesSection'
import VisualBg from '@/features/home/ui/VisualBg'
import Header from '@/shared/ui/header'
import Footer from '@/shared/ui/footer/Footer'

const HomePage = () => {
	return (
		<>
			<Header />
			<div className='relative'>
				<VisualBg />
				<div className='p-4'>
					<HomePageMain />
				</div>
			</div>
			<CloseLoopSection />
			<CaseStudySection />
			<TilesSection />
			<FinalCtaSection />
			<Footer />
		</>
	)
}

export default HomePage
