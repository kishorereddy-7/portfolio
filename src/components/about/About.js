import PageWrapper from "../pageWrapper/PageWrapper";
import {
  Heading,
  CardHeader,
  CardBody,
  CardSubdued,
} from "@innovaccer/design-system";
import { educationDetails, workDetails } from "../../constant";
import * as S from "./style";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const personalDetailsHeaders = {
  work: "Work Experience",
  education: "Education Background",
};

const About = () => {
  const getDetails = (header) => {
    const detailArrays = {
      "Work Experience": workDetails,
      "Education Background": educationDetails,
    };
    return detailArrays[header].map((item, index) => {
      return (
        <S.StyledCard className="m-6" key={index}>
          <CardHeader className="pb-2">
            <div
              style={{ color: "#65c868" }}
              className="m-0 d-flex align-items-center"
            >
              {personalDetailsHeaders.education === header ? (
                <SchoolIcon />
              ) : (
                <WorkIcon />
              )}
              <h3 className="mt-2 mb-2 ml-4">
                {personalDetailsHeaders.education === header
                  ? item.qualification
                  : item.designation}
              </h3>
            </div>
            <div className="mt-4  d-flex align-items-center">
              <BusinessIcon />
              <h3 className="ml-4 mt-2 mb-2">
                {personalDetailsHeaders.education === header
                  ? item.institute
                  : item.company}
              </h3>
            </div>
          </CardHeader>
          <CardBody>
            <div className="m-0 pb-2  d-flex align-items-center">
              <LocationOnIcon />
              <h3 className="mt-2 mb-2 ml-4">{item.location}</h3>
            </div>
          </CardBody>
          <CardSubdued border="top" className="p-2">
            <div className="d-flex align-item-center justify-content-end">
              <h3 className="m-0 mr-4">{item.from} </h3>
              <ArrowCircleRightIcon />
              <h3 className="m-0 ml-4"> {item.to}</h3>
            </div>
          </CardSubdued>
        </S.StyledCard>
      );
    });
  };

  const getAllPersonalDetails = (header) => {
    return (
      <>
        <Heading className="font-weight-bold m-6">{header}</Heading>
        {getDetails(header)}
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
