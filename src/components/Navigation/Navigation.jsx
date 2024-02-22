import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../redux/options';
import { NavLink } from 'react-router-dom';
import ToggleSwitch from '../ToggleSwitch';
import { motion as m } from 'framer-motion'
import './Navigation.css';

const Navigation = () => {
  const dispatch = useDispatch()
  const dark = useSelector(s=>s.options.dark)
  const [d,setD] = useState(dark)
  const [animate,transition] = [
    {x:0, opacity:1},
    {duration:.8, type:'spring', stiffness: 100}
  ]

  useEffect(()=>{
    document.documentElement.dataset.theme = dark?'dark':'light'
  },[dark])
  useEffect(()=>{
    dispatch(setTheme(d))
  },[d, dispatch])

  return <div id='navBar'>
    <m.div initial={{x:-25, opacity:0}} animate={animate} transition={transition}>
      <NavLink to='/'><i className='fa-solid fa-house fa-xl'/></NavLink>
    </m.div>
    <m.div initial={{x:25, opacity:0}} animate={animate} transition={transition}>
      <ToggleSwitch state={d} setState={setD} label={<i style={{width:'25px'}} className={`fas fa-${dark?'moon fa-flip-horizontal':'sun'} fa-xl`}/>}/>
    </m.div>
    {/* {<div onClick={()=>dispatch(setTheme(!dark))} id='themeToggle'>
      <i className={`fas fa-${dark?'moo':'su'}n fa-xl`}/> {dark?'Dark':'Light'} Theme
    </div>} */}
  </div>
}

export default Navigation;
