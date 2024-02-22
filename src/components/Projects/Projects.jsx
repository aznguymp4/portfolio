import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Projects.css'
import GifV from '../GifV'
import ProjectList from './ProjectList'
import PreviewWindow from './PreviewWindow'

const Projects = () => {
	const [projIdx, setProjIdx] = useState(0)
	const [imgSel, setImgSel] = useState(null)
	const [imgSelLoaded, setImgSelLoaded] = useState(false)
	const focus = useSelector(s=>s.options.focus)
	const proj = ProjectList[projIdx]

	const selImg = (e, img) => {
		if(imgSel) return
		setImgSelLoaded(false)
		setImgSel({...img, target: e.target})
	}

	const macBtns = <>
		<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-xmark"/></div>
		<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-minus"/></div>
		<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-plus"/></div>
	</>

	const tabs = ProjectList.map((p,i) => <div
		className={`projectTab trim ${projIdx===i?'selected':''}`}
		onClick={()=>{
			setImgSel(null)
			setProjIdx(i)
		}}
		key={i}
	>
		<div className='projectTabIcon'><img key={'icon'+i} src={`./projects/${p.name}/${p.icon}`}/></div>
		<div className='projectTabName'>{p.name}</div>
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
				<div className='projectWindowRTop wsemibold'>
					<div className='projectWindowLTop'>
						{macBtns}
					</div>
					<div>{proj.name}</div>
					{imgSel && !imgSelLoaded && <div className='ca700 ar projectWindowRTopLoad'><i className="fa-solid fa-gear fa-spin fa-lg"/></div>}
				</div>
				<div className='projectWindowRTabs'>{tabs}</div>
				<div className='projectWindowRBody'>{
					<>
						<div className='projectWindowBodyInfo'>
							<div className='projectInfoName'>
								<div className='projectInfoIcon' style={{backgroundColor: proj.iconBg}}>
									<img key={'icon'+projIdx} src={`./projects/${proj.name}/${proj.icon}`}/>
								</div>
								<div className='projectInfoText'>
									<div className='s500 wbold'>{proj.name}</div>
									<div className='projectInfoOpenBtn'>
										<Link to={proj.url} target='_blank' rel='noopener noreferrer' className='s200 w700'>
											OPEN
										</Link>
										<i style={{marginLeft:'8px'}} className="fa-solid ct600 fa-arrow-up-right-from-square fa-xs"/>
									</div>
								</div>
							</div>
							<div className='projectInfoDesc s200 w500'>{proj.desc}</div>
						</div>
						{proj.imgs.map((img,idx) => <div key={idx} className='projectImg'>{
								img.vid
								? <GifV onClick={e=>selImg(e, img)} src={`./projects/${proj.name}/${img.src}`} type={img.vid}/>
								: <img onClick={e=>selImg(e, img)} src={`./projects/${proj.name}/${img.src}`}/>
							}</div>
						)}
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