import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import './GifV.css'

// A <video/> that behaves as a gif (because .mp4 file sizes are much smaller and better quality) 
const GifV = ({src, type, onClick, onLoad, unmute, thumbTime}) => {
	const vidRef = useRef()
	const focus = useSelector(s=>s.options.focus)
	useEffect(()=>{
		const vid = vidRef?.current
		if(!vid) return
		vid.currentTime=thumbTime||0
		vid.volume=unmute?.25:0
		if(focus) vid.play()
		else vid.pause()
	}, [focus, thumbTime, unmute])

  return <video
		className='gifv'
		autoPlay
		controls={unmute}
		loop
		muted={!unmute}
		ref={vidRef}
		playsInline // Disables auto fullscreen on iOS
		onClick={onClick}
		onLoadStart={onLoad && (()=>{setInterval(()=>{onLoad()},30)})}
	>
		<source
			type={type}
			src={src}
		/>
		Your browser does not support the video tag.
	</video>
}

export default GifV