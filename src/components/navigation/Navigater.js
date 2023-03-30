import { useState } from "react";
import * as S from './style';

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
  {
    name: "skill",
    label: "Work",
    icon: "work"
  },
  {
    name: "contact",
    label: "Contacts",
    icon: "cable"
  }
]

export const Navigater = ({ handleMenu }) => {
  
  const [menu, setActiveMenu] = useState({ name: "home" });

  const onClickHandler = (menu) => {
    setActiveMenu(menu);
    handleMenu(menu)
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
