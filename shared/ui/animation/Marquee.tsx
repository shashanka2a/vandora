'use client'

import {
	motion,
	useAnimationFrame,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
	wrap,
} from 'framer-motion'
import { type FC, type PropsWithChildren, useRef } from 'react'

interface Props extends PropsWithChildren {
	baseVelocity: number // 이동 속도
	repeatCount?: number
}
const Marquee: FC<Props> = ({ children, baseVelocity = 10, repeatCount = 5 }) => {
	// 텍스트의 위치(x)를 직접 관리하는 MotionValue
	const baseX = useMotionValue(0)

	// 현재 스크롤 위치(Y축) 가져오기
	const { scrollY } = useScroll()

	// 스크롤 속도 계산 (스크롤이 빨라지면 값이 커짐)
	const scrollVelocity = useVelocity(scrollY)

	// 스크롤 속도를 스무스하게(부드럽게) 만들어 줌 → 갑자기 빨라졌다 느려지는 걸 방지
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50, // 튕김 없이 얼마나 부드럽게 멈추는가 (마찰력)
		stiffness: 400, // 값이 목표값으로 얼마나 빠르게 다가가는가 (탄성력)
	})

	// 스크롤 속도 값을 0~1000 → 0~5 범위로 변환
	// 스크롤이 빠르면 패럴랙스 스피드도 빠르게 하기 위함
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	})

	// baseX 값을 -20% ~ -45%에서 반복되도록 래핑(wrap)
	// 즉, 텍스트가 끝쪽으로 나가면 반대쪽으로 연결되어 끊김없이 움직임
	const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`)

	// 텍스트가 왼쪽/오른쪽 중 어느 방향으로 움직일지 결정
	const directionFactor = useRef<number>(1)

	// 매 프레임마다 실행되는 애니메이션 루프
	// requestAnimationFrame를 리액트 친화적으로 제공하는 훅
	useAnimationFrame((t, delta) => {
		// delta(ms)는 이전 프레임과 지금 프레임의 시간 차이 → 프레임이 빠르거나 느려도 같은 속도로 움직이도록 보정

		let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

		// 스크롤 방향에 따라 왼/오른쪽 방향 결정
		if (velocityFactor.get() < 0) {
			directionFactor.current = -1 // 스크롤을 위로 올리는 중
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1 // 스크롤을 아래로 내리는 중
		}

		// 스크롤 속도에 따라 추가 가속도 부여
		moveBy += directionFactor.current * moveBy * velocityFactor.get()

		// baseX 값을 계속 누적해서 움직임
		baseX.set(baseX.get() + moveBy)
	})

	return (
		<div
			className={[
				'parallax',
				'm-0 flex flex-nowrap overflow-hidden leading-[0.8] tracking-[-2px] whitespace-nowrap',
			].join(' ')}>
			<motion.div
				className={[
					'scroller',
					'flex flex-nowrap text-[64px] font-bold whitespace-nowrap uppercase',
					'text-white',
				].join(' ')}
				style={{ x }}>
				{/* 텍스트를 여러 개 반복해서 넣음  */}
				{Array.from({ length: repeatCount }).map((_, index) => (
					<div key={index} className='mr-[30px]'>
						{children}{' '}
					</div>
				))}
			</motion.div>
		</div>
	)
}

export default Marquee
