import HomePageMain from '@/features/home/ui'
import VandoraSections from '@/features/home/ui/VandoraSections'
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
			<VandoraSections />
		</>
	)
}

export default HomePage
