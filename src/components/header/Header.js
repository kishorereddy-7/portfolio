import { Button } from "@mui/material";
import * as S from "./style";

const navButtons = ["ABOUT", "SKILLS", "CONTACTS"];

const Header = ({ changePage }) => {
  const renderNavButton = navButtons.map((btnName, index) => (
    <Button
      size="large"
      key={index}
      color="info"
      onClick={() => changePage(btnName)}
    >
      {btnName}
    </Button>
  ));
  return (
    <S.HeadWrapper>
      <h1 style={{ cursor: "pointer" }} onClick={() => changePage("INTRO")}>
        Venkata Kishore
      </h1>
      <S.NavWrapper>{renderNavButton}</S.NavWrapper>
    </S.HeadWrapper>
  );
};

export default Header;
