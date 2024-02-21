import './GifV.css'

// A <video/> that behaves as a gif (because .mp4 file sizes are much smaller and better quality) 
const GifV = ({src, type}) => {
  return <video
		className='gifv'
		autoPlay='autoplay'
		controls=''
		loop
		muted
	>
		<source type={type} src={src}/>
		Your browser does not support the video tag.
	</video>
}

export default GifV