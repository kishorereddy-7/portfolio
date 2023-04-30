import * as S from "./style";
import Profile from "./../assets/profile.jpg";
import { personalDetails } from "../../constant";
import { Heading } from "@innovaccer/design-system";
import PageWrapper from "../pageWrapper/PageWrapper";

const Intro = () => {
  return (
    <PageWrapper>
      <S.ImageMobileWrapper className="p-8">
        <S.ProfileImage src={Profile} alt="profile" />
      </S.ImageMobileWrapper>
      <header className="p-10">
        <S.Greating>Hi, &#128400; I am</S.Greating>
        <Heading size="xl" className="font-weight-bold">
          {personalDetails.firstName + " " + personalDetails.lastName}
          <S.StyledSubHeading appearance="subtle">
            {personalDetails.role.toUpperCase()}
          </S.StyledSubHeading>
        </Heading>
      </header>
    </PageWrapper>
  );
};

export default Intro;
