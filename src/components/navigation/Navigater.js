import { useEffect, useState } from "react";
import * as S from './style';
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: "home",
    label: "Home",
    icon: "home"
  },
  {
    name: "about",
    label: "About",
    icon: "info"
  },
  // {
  //   name: "work",
  //   label: "Work",
  //   icon: "work"
  // },
  {
    name: "contact",
    label: "Contacts",
    icon: "cable"
  }
]

export const Navigater = () => {
  
  const [menu, setActiveMenu] = useState(null);

  useEffect(() => {
    const sessionMenu = JSON.parse(sessionStorage.getItem("menu"))
    setActiveMenu(sessionMenu ? sessionMenu : { name: "home" });
  }, [])

  const navigate = useNavigate();

  const onClickHandler = (menu) => {
    setActiveMenu(menu);
    navigate('/' + menu.name)
    sessionStorage.setItem("menu", JSON.stringify(menu))
  };

  return (
    <S.NavigationWrapper className="p-4">
      <S.NavigationMenu
        className="w-100 justify-content-around nav-icon-text"
        menus={data}
        active={menu}
        onClick={onClickHandler}
      />
    </S.NavigationWrapper>
  );
};
