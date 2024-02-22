import { useState } from 'react'
import GifV from '../GifV'
import './PreviewWindow.css'

const PreviewWindow = ({ proj, img, setImgSel }) => {
  const [loaded, setLoaded] = useState(false)
  const load = () => {
    setLoaded(true)
  }
  const image = img.vid
  ? <GifV onLoad={load} src={`./projects/${proj.name}/${img.src}`} type={img.vid}/>
  : <img onLoad={load} src={`./projects/${proj.name}/${img.src}`}/>

  return <div
    className={`previewWindow ${loaded?'loaded':''}`}
    style={{
      top: img.bounds.y + (img.bounds.height*.5),
      left: img.bounds.x + (img.bounds.width*.5)
    }}
  >
    <div className='previewWindowTop'>
      <div className='previewWindowTopBtn mav' onClick={()=>setImgSel(null)}><i className="fa-solid fa-xmark"/></div>
      <span className='ma s200 wsemibold'>{proj.name}</span>
    </div>
    <div className='previewWindowBody'>
      {image}
      <div className=''>
        
      </div>
    </div>
  </div>
}
export default PreviewWindow