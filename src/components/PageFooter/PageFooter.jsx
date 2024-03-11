import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import './PageFooter.css'

const PageFooter = () => {
	return <m.div
		id='pageFooter' 
		className='ac'
		initial={{opacity: 0}}
		animate={{opacity: 1}}
	>
		<div id='pageFooterTop'>
			<div id='socials'>
				<Link target='_blank' rel='noopener noreferrer' title='Contact Me' to='mailto:mail@erich-n.com'><i className='fa-solid fa-envelope'/></Link>
				<Link target='_blank' rel='noopener noreferrer' title='My GitHub' to='https://github.com/aznguymp4'><i className='fa-brands fa-github'/></Link>
				<Link target='_blank' rel='noopener noreferrer' title='My LinkedIn' to='https://linkedin.com/in/erich-n/'><i className='fa-brands fa-linkedin'/></Link>
				{/* <Link target='_blank' rel='noopener noreferrer' title='My Twitter' to='https://x.com/aznguymp4'><i className='fa-brands fa-x-twitter'/></Link> */}
				<Link target='_blank' rel='noopener noreferrer' title='My Résumé' to='https://docs.google.com/document/d/1eI5BVMny8-gmsmz8bVjm4aPngrAUwL432XSDlX34tdc/view'><i className='fa-solid fa-file-lines fa-sm'/></Link>
				<Link target='_blank' rel='noopener noreferrer' title='This site&apos;s Source Code' to='https://github.com/aznguymp4/portfolio'><i className='fa-solid fa-code'/></Link>
			</div>
		</div>
		<div id='pageFooterBottom' className='s200 w500 ct800'>
			<div>© {new Date().getUTCFullYear()}, Erich Nguyen</div>
		</div>
	</m.div>
}

export default PageFooter