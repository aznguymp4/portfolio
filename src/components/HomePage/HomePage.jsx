import './HomePage.css'
import HelloHeader from '../HelloHeader'
import Projects from '../Projects'
import Skills from '../Skills'
import Quote from './Quote'
import { motion as m } from 'framer-motion'

const HomePage = () => {
	const [initial, animate] = [
		{y: 15, opacity: 0},
		{y: 0, opacity: 1}
	]

  return <>
		<HelloHeader/>
		<Quote/>
		<m.div
			initial={initial}
			animate={animate}
			transition={{delay: .3}}
		><Skills delay={.4}/></m.div>

		<m.div
			initial={initial}
			animate={animate}
			transition={{delay: .4}}
		><Projects/></m.div>
	</>
}

export default HomePage