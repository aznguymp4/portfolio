import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import './GifV.css'

// A <video/> that behaves as a gif (because .mp4 file sizes are much smaller and better quality) 
const GifV = ({src, type}) => {
	const vidRef = useRef()
	const focus = useSelector(s=>s.options.focus)
	useEffect(()=>{
		const vid = vidRef?.current
		if(!vid) return
		vid.currentTime=0
		if(focus) vid.play()
		else vid.pause()
	}, [focus])

  return <video
		className='gifv'
		autoPlay
		controls=''
		loop
		muted
		ref={vidRef}
		playsInline // Disables auto fullscreen on iOS
	>
		<source type={type} src={src}/>
		Your browser does not support the video tag.
	</video>
}

export default GifV