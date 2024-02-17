import { motion } from 'framer-motion';
import './HelloHeader.css'

const HelloHeader = () => {
	return <div id="hi">
		<div id="name" className="s600">
			Hey!
			<motion.img
				id=        "waveEmoji"
				className= "prevent-select"
				alt=       "high-five! :D"
				src=       "./icon/hi.webp"
				draggable= "false"
				
				initial=         {{ rotate: 45, scale: .5, opacity: 0, translate: "45% -25%" }}
				animate=         {{ rotate: 0, scale: 1, opacity: 1, translate: "0% 0%" }}
				transition=      {{ type: "spring", stiffness: 300, damping: 16, }}
				whileHover=      {{ translate: "8% -8%", rotate: 13 }}
				whileTap=        {{ scale: .9, rotate: 13, translate: "8% -3%", cursor: "grabbing" }}
				dragConstraints= {{ left: 0, right: 0, top: 0, bottom: 0 }}
				dragTransition=  {{ bounceStiffness: 700, bounceDamping: 25 }}
				dragElastic=     {.05}
				drag
			/>
			<span id="mobile"></span>
			I&apos;m <b>Erich Nguyen</b>,
		</div>
		<div id="roles">
			<div className="role prevent-select">
				<img draggable="false" alt="Web development icon" src='./icon/dev.webp' className="roleIcon prevent-select"/>
				<span>a software engineer.</span>
			</div>
			<div className="role prevent-select">
				<img draggable="false" alt="YouTube Logo" src='./icon/yt.svg' className="roleIcon prevent-select"/>
				<span>a content creator.</span>
			</div>
			<div className="role prevent-select">
				<img draggable="false" alt="Icon of a 3D Cube" src='./icon/game.webp' className="roleIcon prevent-select"/>
				<span>a game developer.</span>
			</div>
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
	Canvas
	jQuery
	React
	Redux
	Flask
	SQLAlchemy
	Amazon Web Services
	socket.io
	PostgreSQL
	MySQL
	git


Tools
	Visual Studio Code
	Pixelmator Pro
	Node.js
	Nicepage

*/