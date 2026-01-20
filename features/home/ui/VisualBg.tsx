'use client'

import { motion } from 'framer-motion'

const VisualBg = () => {
	return (
		<div>
			<motion.div
				className='absolute inset-0 bg-cover bg-center bg-no-repeat'
				style={{ backgroundImage: "url('/images/visual-bg-vandora.svg')" }}
				initial={{ scale: 1.08 }}
				animate={{ scale: 1 }}
				transition={{
					duration: 1.5,
					ease: 'easeOut',
				}}
			/>
			<div className='absolute inset-0 bg-linear-to-b from-transparent to-black/60' />
		</div>
	)
}

export default VisualBg
