import { motion as m } from 'framer-motion';
import './HelloHeader.css'
import { Link } from 'react-router-dom';

const HelloHeader = () => {
	const INitial = {y:-20, opacity: 0}
	const aaa = {y:0, opacity: 1}

	return <div id='helloHeader'>
		<div id='hi' className=''>
			<div id='name'>
				<div className='s400 w500 ct700'>
					<m.div
						initial={INitial}
						animate={aaa}
						id='heyWave'
					>
						<div>Hey!</div>
						<m.div
							initial=         {{ rotate: 45, scale: .5, opacity: 0, translate: '45% -25%' }}
							animate=         {{ rotate: 0, scale: 1, opacity: 1, translate: '0% 0%' }}
							transition=      {{ type: 'spring', stiffness: 300, damping: 16 }}
							whileHover=      {{ translate: '8% -8%', rotate: 13 }}
							whileTap=        {{ scale: .9, rotate: 13, translate: '8% -3%', cursor: 'grabbing' }}
							dragConstraints= {{ left: 0, right: 0, top: 0, bottom: 0 }}
							dragTransition=  {{ bounceStiffness: 700, bounceDamping: 25 }}
							dragElastic=     {.005}
							drag
							draggable= 'false'
							id=        'waveEmoji'
							className= 'prevent-select'
							style={{height:'24px'}}
						>
							<img
								src=       './icon/hi.webp'
								className= 'prevent-select'
								draggable= 'false'
								width=     '40px'
								style={{transform:'translateY(-8px)'}}
							/>
						</m.div>
					</m.div>
				</div>
				<m.div
					className='s600'
					initial={INitial}
					animate={aaa}
					transition={{delay: window.homePageINterval}}
				>
					I&apos;m <b>Erich Nguyen</b>,
				</m.div>
			</div>
			<m.div
				id='roles'
				initial={INitial}
				animate={aaa}
				transition={{delay: window.homePageINterval*2}}
			>
				<div className='role noSelect noDrag'>
					<img draggable='false' src='./icon/dev.webp' className='roleIcon noSelect noDrag'/>
					<span>a software engineer.</span>
				</div>
				<div className='role noSelect noDrag'>
					<img draggable='false' src='./icon/game.webp' className='roleIcon noSelect noDrag'/>
					<span>a game developer.</span>
				</div>
				<div className='role noSelect noDrag'>
					<img draggable='false' src='./icon/yt.svg' className='roleIcon noSelect noDrag'/>
					<span>a former content creator.</span>
				</div>
			</m.div>
			<m.div
				id='headerContactBtns'
				initial={INitial}
				animate={aaa}
				transition={{delay: window.homePageINterval*3}}
			>
				<Link to='mailto:mail@erich-n.com' target='_blank' rel='noopener noreferrer'>
					<div className='btn getInTouch'><i className="fa-solid fa-envelope"/> Get in Touch</div>
				</Link>
				<Link className='mav' to='https://docs.google.com/document/d/1eI5BVMny8-gmsmz8bVjm4aPngrAUwL432XSDlX34tdc/view' target='_blank' rel='noopener noreferrer'>
					<div className='wsemibold o80'><i className="fa-solid fa-file-lines"/> Résumé</div>
				</Link>
			</m.div>
			<m.div
				id='headerExtraSocials'
				initial={INitial}
				animate={aaa}
				transition={{delay: window.homePageINterval*4}}
			>
				<Link className='o80' target='_blank' rel='noopener noreferrer' title='My LinkedIn' to='https://linkedin.com/in/erich-n/'><i className='fa-brands fa-linkedin fa-lg'/></Link>
				<Link className='o80' target='_blank' rel='noopener noreferrer' title='My GitHub' to='https://github.com/aznguymp4'><i className='fa-brands fa-github fa-lg'/></Link>
			</m.div>
		</div>
		<m.div
			id='headshot'
			className='noDrag noSelect'
			transition={{ duration: 1.2, ease: 'circOut' }}
			whileHover={{ scale: 1.02, cursor: 'pointer' }}
			whileTap  ={{ scale: .98, cursor: 'grabbing' }}
			dragConstraints= {{ left: 0, right: 0, top: 0, bottom: 0 }}
			dragTransition=  {{ bounceStiffness: 700, bounceDamping: 25 }}
			dragElastic=     {.005}
			drag
		>
			<img
				src='./headshot.webp'
				className='noSelect noDrag'
				onLoad={e=>e.target.classList.add('loaded')}
			/>
		</m.div>
	</div>
}

export default HelloHeader

/*

Languages
	JavaScript
	Lua / Luau
	Python
	HTML
	CSS

Technologies
	Animate.css
	Framer Motion
	Sequelize
	Express
	HTML Canvas
	jQuery
	React
	Redux
	Flask
	SQLAlchemy
	Amazon Web Services
	Socket.IO
	PostgreSQL
	MySQL
	Git
	Regex


Tools
	Visual Studio Code
	Pixelmator Pro
	Node.js
	Nicepage

*/