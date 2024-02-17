import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ModalProvider, Modal } from "../context/Modal";
import Navigation from "../components/Navigation/Navigation";

export default function Layout() {
  // const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // dispatch(thunkAuthenticate()).then(() => setIsLoaded(true));
    setIsLoaded(true)
  }, []);

  return (
    <ModalProvider>
      <Navigation />
      {isLoaded && <Outlet/>}
      <Modal />
    </ModalProvider>
  );
}
