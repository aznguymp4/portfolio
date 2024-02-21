import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ModalProvider, Modal } from "../context/Modal";
import { useDispatch } from "react-redux";
import { setFocus } from "../redux/options";
import Navigation from "../components/Navigation";
import PageFooter from "../components/PageFooter";

export default function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // dispatch(thunkAuthenticate()).then(() => setIsLoaded(true));
    setIsLoaded(true)
  }, []);
  useEffect(()=>{
		const onFocus = () => dispatch(setFocus(true))
		const onBlur = () => dispatch(setFocus(false))
		window.addEventListener('focus', onFocus)
		window.addEventListener('blur', onBlur)
		return ()=>{
			window.removeEventListener('focus', onFocus)
			window.removeEventListener('blur', onBlur)
		}
	},[dispatch])

  return (
    <ModalProvider>
      <Navigation/>
      {isLoaded && <Outlet/>}
      <PageFooter/>
      <Modal/>
    </ModalProvider>
  );
}
