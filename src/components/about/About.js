import PageWrapper from "../pageWrapper/PageWrapper";
import { Heading, Card, CardHeader, CardBody, CardSubdued } from "@innovaccer/design-system";
import { educationDetails, workDetails } from "../../constant";
import * as S from "./style";

const personalDetailsHeaders = {
  work: "Work Experience",
  education: "Education Background",
};

const symbols = {
  qualification: <span className="mr-4">&#127891;</span>,
  work: <span className="mr-4">&#128421;</span>,
  location: <span className="mr-4">&#128205;</span>,
  rightArrow: <span className="mr-4">&#8594;</span>,
  building: <span className="mr-4">&#127970;</span>,
};

const About = () => {

  const getDetails = (header) => {
    const detailArrays = {
      "Work Experience": workDetails,
      "Education Background": educationDetails
    }
    return detailArrays[header].map((item, index) => {
      return (
        <S.StyledCard className="m-6" key={index}>
          <CardHeader className="pb-2">
            <p style={{ color: "#65c868" }} className="m-0">
              {personalDetailsHeaders.education === header
                ? symbols.qualification
                : symbols.work}
              {personalDetailsHeaders.education === header
                ? item.qualification
                : item.designation}
            </p>
            <S.SubtitledP className="mt-4">
              {symbols.building}
              {personalDetailsHeaders.education === header
                ? item.institute
                : item.company}
            </S.SubtitledP>
          </CardHeader>
          <CardBody>
            <p className="m-0 pb-2">
              {symbols.location}
              {item.location}
            </p>
          </CardBody>
          <CardSubdued border="top" className="p-2">
            <S.DateWrapper>
              <i>
                {item.from} {symbols.rightArrow}
                {item.to}
              </i>
            </S.DateWrapper>
          </CardSubdued>
        </S.StyledCard>
      );
    });
  };

  const getAllPersonalDetails = (header) => {
    return (
      <>
        <Heading className="font-weight-bold m-6">{header}</Heading>
        { getDetails(header)}
      </>
    );
  };

  return (
    <PageWrapper>
      <S.AboutHeadWrapper className="pr-10 pt-8">
        <Heading size="xl" className="font-weight-bold">
          A Quick Background
        </Heading>
      </S.AboutHeadWrapper>
      <div className="p-6 pb-10">
        {getAllPersonalDetails(personalDetailsHeaders.work)}
        {getAllPersonalDetails(personalDetailsHeaders.education)}
      </div>
    </PageWrapper>
  );
};

export default About;
