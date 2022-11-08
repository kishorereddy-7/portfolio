import { Button, Skeleton } from "@mui/material";
import * as S from "./style";

const navButtons = ["ABOUT", "SKILLS", "CONTACTS"];

const Header = ({ changePage, loading, person, detailsError }) => {
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

  const renderTitle = () => {
    if (detailsError) {
      return <h1>Something went wrong</h1>;
    }
    return (
      <h1 style={{ cursor: "pointer" }} onClick={() => changePage("INTRO")}>
        {loading ? (
          <Skeleton animation="wave" width={300} />
        ) : (
          person.first_name
        )}
      </h1>
    );
  };

  return (
    <S.HeadWrapper>
      {renderTitle()}
      <S.NavWrapper>{renderNavButton}</S.NavWrapper>
    </S.HeadWrapper>
  );
};

export default Header;
