import HomePageMain from '@/features/home/ui'
import FeaturesSection from '@/features/home/ui/FeaturesSection'
import CaseStudiesSection from '@/features/home/ui/CaseStudiesSection'
import VisualBg from '@/features/home/ui/VisualBg'
import Header from '@/shared/ui/header'

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
		</>
	)
}

export default HomePage
