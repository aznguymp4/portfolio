import { useState, useEffect } from 'react'
import './Projects.css'
import GifV from '../GifV'
import ProjectList from './ProjectList'

const Projects = () => {
	const [projIdx, setProjIdx] = useState(0)
	const [focus, setFocus] = useState(true)
	const proj = ProjectList[projIdx]

	useEffect(()=>{
		const onFocus = () => setFocus(true)
		const onBlur = () => setFocus(false)
		window.addEventListener('focus', onFocus)
		window.addEventListener('blur', onBlur)
		return ()=>{
			window.removeEventListener('focus', onFocus)
			window.removeEventListener('blur', onBlur)
		}
	},[])

	return <div className="projects themeApplicable">
		<div className='ac s500 wbold ca700'>Projects</div>
		<div className='ac s300 w500 ct700'>Check out my work!</div>
		<br/>
		<div className='projectWindow themeApplicable'>
			<div className='projectWindowL themeApplicable'>
				<div className={`projectWindowLTop noDrag noSelect ${focus?'':'disabled'}`}>
					<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-xmark"/></div>
					<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-minus"/></div>
					<div className={`macBtn ${focus?'':'gray'}`}><i className="fa-solid fa-plus"/></div>
				</div>
				<div className='projectWindowLList noScrollBar'>{
					ProjectList.map((p,i) => <div
						className={`projectTab noDrag noSelect ${projIdx===i?'selected':''}`}
						onClick={()=>setProjIdx(i)}
						key={i}
					>
						<div className='projectTabIcon'><img className='themeApplicable' src={`./projects/${p.name}/${p.icon}`}/></div>
						<div className='projectTabName'>{p.name}</div>
					</div>)
				}</div>
			</div>
			<div className='projectWindowR'>
				<div className='projectWindowRTop wsemibold'>{proj.name}</div>
				<div className='projectWindowRBody'>{
					proj.imgs.map((img,idx) => <div key={idx} className='projectImg'>{
							img.vid
							? <GifV src={`./projects/${proj.name}/${img.src}`} type={img.vid}/>
							: <img src={`./projects/${proj.name}/${img.src}`}/>
						}</div>
					)
				}</div>
			</div>
		</div>
	</div>
}

export default Projects