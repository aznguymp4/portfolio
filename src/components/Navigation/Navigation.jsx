import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "../../redux/options";
import { NavLink } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch";
import "./Navigation.css";

const Navigation = () => {
  const dispatch = useDispatch()
  const dark = useSelector(s=>s.options.dark)
  const [d,setD] = useState(dark)
  useEffect(()=>{
    document.documentElement.dataset.theme = dark?'dark':'light'
  },[dark])
  useEffect(()=>{
    dispatch(setTheme(d))
  },[d, dispatch])

  return <div id="navBar">
    <NavLink to="/"><b>Home</b></NavLink>
    <ToggleSwitch state={d} setState={setD} label={<i className={`fas fa-${dark?'moo':'su'}n fa-xl`}/>}/>
    {/* {<div onClick={()=>dispatch(setTheme(!dark))} id="themeToggle">
      <i className={`fas fa-${dark?'moo':'su'}n fa-xl`}/> {dark?'Dark':'Light'} Theme
    </div>} */}
  </div>
}

export default Navigation;
