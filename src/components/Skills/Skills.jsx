import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SkillList from './SkillList'
import './Skills.css'
import { motion as m } from 'framer-motion'

const Skills = ({ delay }) => {
	const [skillIdx, setSkillIdx] = useState(null)
	const focus = useSelector(s=>s.options.focus)
	const selSkill = SkillList[skillIdx]

	return <div className="projects">
		<div className='ac s500 wbold ca700'>Skills <span className='wsemibold s400 ca900'>&</span> Tools</div>
		<br/>
		<div className='projectWindow skillWindow noDrag noSelect'>
			<div className={`projectWindowLTop ${focus?'':'disabled'}`}>
				<div className={`macBtn ${focus?'':'gray'}`} onClick={()=>setSkillIdx(null)}><i className="fa-solid fa-xmark"/></div>
				<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-minus"/></div>
				<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-plus"/></div>
				<span className='skillWindowTitle trim s200 ct900 wsemibold'>{selSkill?.name || 'Skills'}</span>
				{selSkill && <Link
					className='skillWindowOpen s100 w500'
					to={selSkill.url}
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className="fa-solid fa-arrow-up-right-from-square"/> Learn More
				</Link>}
			</div>
			<div className='skillIcons'>{
				SkillList.map((s,i) => <m.i
					key={i}
					className={`devicon-${s.icon} ${skillIdx===i?'selected':''}`}
					onClick={()=>setSkillIdx(c=>c===i?null:i)}
					initial={{y:5, opacity:0}}
					animate={{y:0, opacity:1}}
					transition={{delay: delay+(i*.025)}}
				/>)
			}</div>
		</div>
	</div>
}

export default Skills