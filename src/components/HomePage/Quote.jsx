import { useSelector } from "react-redux"
import './Quote.css'

const Quote = () => {
  const dark = useSelector(s=>s.options.dark)
  return <div id='CCCquote'>
    <img className="noSelect noDrag" src='./quoteDark.svg' style={{opacity:dark?.8:0}}/>
    <img className="noSelect noDrag" src='./quoteLight.svg' style={{opacity:dark?0:.8}}/>
  </div>
}

export default Quote