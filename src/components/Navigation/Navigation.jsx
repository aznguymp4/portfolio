import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "../../redux/options";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const dispatch = useDispatch()
  const dark = useSelector(s=>s.options.dark)
  useEffect(()=>{
    document.documentElement.dataset.theme = dark?'dark':'light'
  },[dark])

  return <div id="navBar">
    <NavLink to="/">Home</NavLink>
    {<div onClick={()=>dispatch(setTheme(!dark))} id="themeToggle">
      <i className={`fas fa-${dark?'moo':'su'}n fa-xl`}/> {dark?'Dark':'Light'} Theme  
    </div>}
  </div>
}

export default Navigation;
