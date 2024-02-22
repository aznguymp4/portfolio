import { useState } from 'react'
import { useSelector } from 'react-redux'
import './Projects.css'
import GifV from '../GifV'
import ProjectList from './ProjectList'
import PreviewWindow from './PreviewWindow'

const Projects = () => {
	const [projIdx, setProjIdx] = useState(0)
	const [imgSel, setImgSel] = useState(null)
	const focus = useSelector(s=>s.options.focus)
	const proj = ProjectList[projIdx]

	const selImg = (e, img) => {
		setImgSel({...img, bounds: e.target.getBoundingClientRect()})
	}

	return <div className="projects">
		<div className='ac s500 wbold ca700'>Projects</div>
		<div className='ac s300 w500 ct700'>Check out my work!</div>
		<br/>
		<div className='projectWindow noDrag noSelect'>
			<div className='projectWindowL'>
				<div className={`projectWindowLTop ${focus?'':'disabled'}`}>
					<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-xmark"/></div>
					<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-minus"/></div>
					<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-plus"/></div>
				</div>
				<div className='projectWindowLList noScrollBar'>{
					ProjectList.map((p,i) => <div
						className={`projectTab ${projIdx===i?'selected':''}`}
						onClick={()=>{
							setImgSel(null)
							setProjIdx(i)
						}}
						key={i}
					>
						<div className='projectTabIcon'><img className='' src={`./projects/${p.name}/${p.icon}`}/></div>
						<div className='projectTabName'>{p.name}</div>
					</div>)
				}</div>
			</div>
			<div className='projectWindowR'>
				<div className='projectWindowRTop wsemibold'>{proj.name}</div>
				<div className='projectWindowRBody'>{
					proj.imgs.map((img,idx) => <div key={idx} className='projectImg'>{
							img.vid
							? <GifV onClick={e=>selImg(e, img)} src={`./projects/${proj.name}/${img.src}`} type={img.vid}/>
							: <img onClick={e=>selImg(e, img)} src={`./projects/${proj.name}/${img.src}`}/>
						}</div>
					)
				}</div>
			</div>
		</div>
		
		{imgSel && <PreviewWindow proj={proj} img={imgSel} setImgSel={setImgSel}/>}
	</div>
}

export default Projects