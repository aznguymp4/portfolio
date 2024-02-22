import { useState, useEffect, useCallback } from 'react'
import OutsideAlerter from '../util/OutsideAlerter'
import GifV from '../GifV'
import './PreviewWindow.css'

const PreviewWindow = ({ proj, img, setImgSel, loaded, setLoaded }) => {
  const [closing, setClosing] = useState(false)
  img.bounds = img.target.getBoundingClientRect()
  
  const load = () => {
    setTimeout(()=>{
      setLoaded(true)
    }, 30)
  }
  const close = useCallback(() => {
    img.bounds = img.target.getBoundingClientRect()
    setClosing(true)
    setTimeout(()=>{
      setImgSel(null)
      setClosing(false)
    }, 175)
  }, [setImgSel, img])

  useEffect(()=>{
    const closeKeyPress = e => {
      if(loaded && (e.code === 'Escape' || e.code === 'Space')) close()
    }
    document.addEventListener('keydown', closeKeyPress)
    return ()=>document.removeEventListener('keydown', closeKeyPress)
  },[close, loaded])

  const image = img.vid
  ? <GifV onLoad={load} src={`./projects/${proj.name}/${img.src}`} type={img.vid}/>
  : <img onLoad={load} src={`./projects/${proj.name}/${img.src}`}/>

  return <OutsideAlerter onOutsideClick={close}>
    <div
      className={`previewWindow ${loaded?'loaded':''} ${closing?'closing':''}`}
      style={{
        top: img.bounds.y + (img.bounds.height*.5),
        left: img.bounds.x + (img.bounds.width*.5)
      }}
    >
      <div className='previewWindowTop'>
        <div className='previewWindowTopBtn mav' onClick={close}><i className="fa-solid fa-xmark"/></div>
        <span className='ma s200 wsemibold'>{proj.name}</span>
      </div>
      <div className='previewWindowBody'>
        {image}
        <div className=''>
          
        </div>
      </div>
    </div>
  </OutsideAlerter>
}
export default PreviewWindow