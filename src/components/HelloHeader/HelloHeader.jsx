import { motion as m } from 'framer-motion';
import './HelloHeader.css'

const HelloHeader = () => {
	const INitial = {y:-20, opacity: 0}
	const aaa = {y:0, opacity: 1}

	return <div id='helloHeader'>
		<div id='hi' className='themeApplicable'>
			<div id='name'>
				<div className='s400 w500 ct700'>
					<m.div
						initial={INitial}
						animate={aaa}
					>
						Hey!
						<m.img
							id=        'waveEmoji'
							className= 'prevent-select'
							alt=       'high-five! :D'
							src=       './icon/hi.webp'
							draggable= 'false'
							
							initial=         {{ rotate: 45, scale: .5, opacity: 0, translate: '45% -25%' }}
							animate=         {{ rotate: 0, scale: 1, opacity: 1, translate: '0% 0%' }}
							transition=      {{ type: 'spring', stiffness: 300, damping: 16, }}
							whileHover=      {{ translate: '8% -8%', rotate: 13 }}
							whileTap=        {{ scale: .9, rotate: 13, translate: '8% -3%', cursor: 'grabbing' }}
							dragConstraints= {{ left: 0, right: 0, top: 0, bottom: 0 }}
							dragTransition=  {{ bounceStiffness: 700, bounceDamping: 25 }}
							dragElastic=     {.005}
							drag
						/>
					</m.div>
				</div>
				<m.div
					className='s600'
					initial={INitial}
					animate={aaa}
					transition={{delay: .1}}
				>
					I&apos;m <b>Erich Nguyen</b>,
				</m.div>
			</div>
			<m.div
				id='roles'
				initial={INitial}
				animate={aaa}
				transition={{delay: .2}}
			>
				<div className='role noSelect noDrag'>
					<img draggable='false' alt='Web development icon' src='./icon/dev.webp' className='roleIcon noSelect noDrag'/>
					<span>a software engineer.</span>
				</div>
				<div className='role noSelect noDrag'>
					<img draggable='false' alt='Icon of a 3D Cube' src='./icon/game.webp' className='roleIcon noSelect noDrag'/>
					<span>a game developer.</span>
				</div>
				<div className='role noSelect noDrag'>
					<img draggable='false' alt='YouTube Logo' src='./icon/yt.svg' className='roleIcon noSelect noDrag'/>
					<span>a former content creator.</span>
				</div>
			</m.div>
		</div>
		<div id='headshot'>
			<img
				src='./headshot.webp'
				className='noSelect noDrag'
				onLoad={e=>e.target.classList.add('loaded')}
			/>
		</div>
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