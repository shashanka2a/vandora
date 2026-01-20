import HomePageMain from '@/features/home/ui'
import FeaturesSection from '@/features/home/ui/FeaturesSection'
import CaseStudiesSection from '@/features/home/ui/CaseStudiesSection'
import TilesSection from '@/features/home/ui/TilesSection'
import FinalCtaSection from '@/features/home/ui/FinalCtaSection'
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
			<FeaturesSection />
			<CaseStudiesSection />
			<TilesSection />
			<FinalCtaSection />
			<Footer />
		</>
	)
}

export default HomePage
