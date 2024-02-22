import { useState, useEffect, useCallback } from 'react'
import OutsideAlerter from '../util/OutsideAlerter'
import GifV from '../GifV'
import './PreviewWindow.css'

const PreviewWindow = ({ proj, img, setImgSel, loaded, setLoaded }) => {
  const [closing, setClosing] = useState(false)
  img.bounds = img.target.getBoundingClientRect()
  
  const load = () => {
    // setTimeout(()=>{
      setLoaded(true)
    // }, 30)
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
  ? <GifV onLoad={load} key={img.key} src={`./projects/${proj.dir}/${img.src}`} type={img.vid} unmute={true}/>
  : <img onLoad={load} key={img.key} src={`./projects/${proj.dir}/${img.src}`}/>

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
        <span className='ma s200 wsemibold trim'>{img.alt}</span>
      </div>
      <div className='previewWindowBody ac'>
        {image}
        <div className='s200 w600' style={{marginTop: '8px', textShadow: '0 0 16px var(--text-100)'}}>{img.desc}</div>
      </div>
    </div>
  </OutsideAlerter>
}
export default PreviewWindow