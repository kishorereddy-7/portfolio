import * as S from "./style";
import Profile from "../assets/profile.jpg";
import { personalDetails } from "../../constant";
import { Heading } from "@innovaccer/design-system";
import PageWrapper from "../pageWrapper/PageWrapper";
import resume from "../assets/Kishore-Frontend.pdf";

const Intro = () => {
  return (
    <PageWrapper className="page">
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
        <S.DescriptionText>{personalDetails.description}</S.DescriptionText>
        <div className="d-flex justify-content-end">
          <S.StyledButton className="resume-btn">
            <S.StyleNav
              className="resume-nav"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </S.StyleNav>
          </S.StyledButton>
        </div>
      </header>
    </PageWrapper>
  );
};

export default Intro;
