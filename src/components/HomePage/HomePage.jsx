import './HomePage.css'
import HelloHeader from '../HelloHeader'
import Projects from '../Projects'
import Skills from '../Skills'
import Quote from './Quote'
import AboutMe from '../AboutMe'
import { motion as m } from 'framer-motion'

window.homePageINterval = .125

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
			transition={{delay: window.homePageINterval*3}}
		><AboutMe/></m.div>

		<m.div
			initial={initial}
			animate={animate}
			transition={{delay: window.homePageINterval*4}}
		><Skills delay={window.homePageINterval*4}/></m.div>

		<m.div
			initial={initial}
			animate={animate}
			transition={{delay: window.homePageINterval*5}}
		><Projects/></m.div>
	</>
}

export default HomePage