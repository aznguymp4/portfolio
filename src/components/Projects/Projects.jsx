import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Projects.css'
import GifV from '../GifV'
import ProjectList from './ProjectList'
import PreviewWindow from './PreviewWindow'
import { motion as m } from 'framer-motion'
import OutsideAlerter from '../util/OutsideAlerter'

const Projects = () => {
	const [projIdx, setProjIdx] = useState(0)
	const [imgSel, setImgSel] = useState(null)
	const [imgSelLoaded, setImgSelLoaded] = useState(false)
	const [rTabsOpen, setRTabsOpen] = useState(false)
	const focus = useSelector(s=>s.options.focus)
	const proj = ProjectList[projIdx]

	const selImg = (e, img, key) => {
		if(imgSel) return
		setImgSelLoaded(false)
		setImgSel({...img, target: e.target, key})
	}

	const macBtns = <>
		<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-xmark"/></div>
		<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-minus"/></div>
		<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-plus"/></div>
	</>

	const tabs = ProjectList.map((p,i) => <div
		className={`projectTab ${projIdx===i?'selected':''}`}
		onClick={()=>{
			setImgSel(null)
			setProjIdx(i)
			setRTabsOpen(false)
		}}
		key={i}
	>
		<div className='projectTabIcon'><img key={'icon'+i} src={`./projects/${p.dir}/${p.icon}`}/></div>
		<div className='projectTabName s100 w500'>{p.name}</div>
	</div>)

	return <div className="projects">
		<div className='ac s500 wbold ca700'>Projects</div>
		<div className='ac s300 w500 ct700'>Check out my work!</div>
		<br/>
		<div className='projectWindow noDrag noSelect'>
			<div className='projectWindowL'>
				<div className={`projectWindowLTop ${focus?'':'disabled'}`}>{macBtns}</div>
				<div className='projectWindowLList noScrollBar'>{tabs}</div>
			</div>
			<div className='projectWindowR'>
				<OutsideAlerter onOutsideClick={()=>setRTabsOpen(false)}>
					<div className='projectWindowRTop wsemibold'>
						<div className='projectWindowLTop'>
							{macBtns}
						</div>
						<div className='mav ac projectWindowRTabBtn' onClick={()=>setRTabsOpen(v=>!v)}>
							<i className={`ma fa-solid fa-${rTabsOpen?'xmark':'bars'} ct950`}/>
						</div>
						<div>Projects</div>
						{imgSel && !imgSelLoaded && <div className='ca700 ar projectWindowRTopLoad'><i className="fa-solid fa-gear fa-spin fa-lg"/></div>}
					</div>
					{<m.div
						className='projectWindowRTabs'
						variants={{
							visible: {y:0, scaleY: 1},
							hidden: {y:-48, scaleY: 0}
						}}
						initial='hidden'
						animate={rTabsOpen?'visible':'hidden'}
						transition={{duration: .2, ease: 'circOut'}}
					>
						{tabs}
					</m.div>}
				</OutsideAlerter>
				<div className='projectWindowRBody macScrollBar'>{
					<>
						<div className='projectWindowBodyInfo'>
							<m.div
								className='projectInfoName'
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								transition={{ delay: .2 }}
								variants={{
									visible: { opacity: 1, x: 0 },
									hidden: { opacity: 0, x: -15 }
								}}
							>
								<div className={`projectInfoIcon ${proj.iconLarge?'iconLarge':''}`} style={{backgroundColor: proj.iconLarge? null : proj.iconBg}}>
									<img key={'icon'+projIdx} src={`./projects/${proj.dir}/${proj.iconLarge || proj.icon}`}/>
								</div>
								<div className='projectInfoText'>
									<div className='s500 wbold' style={{width:'max-content'}}>{proj.name}</div>
									<div className='projectInfoOpenBtn'>
										<Link to={proj.url} target='_blank' rel='noopener noreferrer' className='s200 w700'>
											{proj.actionTxt || 'OPEN'}
										</Link>
										<i style={{marginLeft:'8px'}} className="fa-solid ct600 fa-arrow-up-right-from-square fa-xs"/>
									</div>
								</div>
							</m.div>
							<m.div
								className='projectInfoDesc s200 w500 ct700'
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								transition={{ delay: .2 }}
								variants={{
									visible: { opacity: 1, x: 0 },
									hidden: { opacity: 0, x: 15 }
								}}
							>
								{proj.desc}
							</m.div>
						</div>
						{proj.imgs.map((img,idx) => {
							const key = `projImg-${proj.name}-${idx}`

							return <div key={key} className='projectImg'>{
								img.vid
								? <GifV onClick={e=>selImg(e, img, key)}  key={key} src={`./projects/${proj.dir}/${img.src}`} type={img.vid} thumbTime={img.thumbTime}/>
								: <img onClick={e=>selImg(e, img, key)} loading='lazy'  key={key} src={`./projects/${proj.dir}/${img.src}`}/>
							}</div>
						})}
					</>
				}</div>
			</div>
		</div>
		
		{imgSel && <PreviewWindow
			proj={proj}
			img={imgSel}
			setImgSel={setImgSel}
			loaded={imgSelLoaded}
			setLoaded={setImgSelLoaded}
		/>}
	</div>
}

export default Projects