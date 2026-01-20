import HomePageMain from '@/features/home/ui'
import VandoraSections from '@/features/home/ui/VandoraSections'
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
			<VandoraSections />
			<Footer />
		</>
	)
}

export default HomePage
