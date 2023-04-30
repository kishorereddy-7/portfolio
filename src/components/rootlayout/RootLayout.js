import { Outlet } from "react-router-dom"
import { Navigater } from "../navigation/Navigater";

const RootLayout = () => {

  return (
    <>
      <Navigater />
      <Outlet />
    </>
  );
}

export default RootLayout