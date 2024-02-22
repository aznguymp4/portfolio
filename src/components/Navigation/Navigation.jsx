import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../redux/options';
import { NavLink } from 'react-router-dom';
import ToggleSwitch from '../ToggleSwitch';
import { motion as m } from 'framer-motion'
import './Navigation.css';
import ThemePalette from '../../router/theme.json'
import { animate } from 'framer-motion'

const Navigation = () => {
  const dispatch = useDispatch()
  const dark = useSelector(s=>s.options.dark)
  const [d,setD] = useState(dark)
  const [animateEnd,transition] = [
    {x:0, opacity:1},
    {duration:.8, type:'spring', stiffness: 100}
  ]

  useEffect(()=>{
    const val = dark?'dark':'light'
    const root = document.documentElement
    root.dataset.theme = val

    const cols = ThemePalette[val]
    for (const colK in cols) {
      const varName = `--${colK}`
      animate(ThemePalette[dark?'light':'dark'][colK], cols[colK], {
        duration: .3,
        ease: 'easeOut',
        onUpdate: n => root.style.setProperty(varName, n)
      })
    }
  },[dark])

  useEffect(()=>{
    dispatch(setTheme(d))
  },[d, dispatch])

  return <div id='navBar'>
    <m.div initial={{x:-25, opacity:0}} animate={animateEnd} transition={transition}>
      <NavLink to='/'><i className='fa-solid fa-house fa-xl'/></NavLink>
    </m.div>
    <m.div initial={{x:25, opacity:0}} animate={animateEnd} transition={transition}>
      <ToggleSwitch state={d} setState={setD} label={<i style={{width:'25px'}} className={`fa-solid fa-${dark?'moon fa-flip-horizontal':'sun'} fa-xl`}/>}/>
    </m.div>
    {/* {<div onClick={()=>dispatch(setTheme(!dark))} id='themeToggle'>
      <i className={`fas fa-${dark?'moo':'su'}n fa-xl`}/> {dark?'Dark':'Light'} Theme
    </div>} */}
  </div>
}

export default Navigation;
