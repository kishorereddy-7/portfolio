import { Heading, Button } from "@innovaccer/design-system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import * as S from './style';
import { personalDetails } from "../../constant";
import resumePDF from '../assets/resume.pdf';

const IconStyle = { fontSize: "xxx-large", margin: "4px 10px", display: "block", cursor: "pointer" };

const contactsDetails = [
  {
    icon: <EmailIcon style={IconStyle} />,
    code: "guttikondakishorereddy@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&source=mailto&to=guttikondakishorereddy@gmail.com",
  },
  {
    icon: <LinkedInIcon style={IconStyle} />,
    code: "Venkata Kishore Reddy Guttikonda",
    link: "https://www.linkedin.com/in/venkata-kishore-reddy-guttikonda-423208201/",
  },
  {
    icon: <InstagramIcon style={IconStyle} />,
    code: "kishore_reddy_g_v",
    link: "https://www.instagram.com/kishore_reddy_g_v/",
  },
  {
    icon: <GitHubIcon style={IconStyle} />,
    code: "kishorereddy-7",
    link: "https://github.com/kishorereddy-7",
  },
  {
    icon: <YouTubeIcon style={IconStyle} />,
    code: "Kishore Reddy Guttikonda",
    link: "https://www.youtube.com/@kishorereddyguttikonda88",
  },
];

const Contact = () => {

  // const onClikContectText = (code) => {
  //   // code to copy text to clipboard
  //   window.navigator.clipboard.writeText(code)
  // }

  const renderContacts = () => {
    return contactsDetails.map((contact, index) => {
      return (
        <div key={index} className="p-2">
          <a style={{ color: "white" }} href={contact.link} target="_blank" rel="noreferrer">
            {contact.icon}
          </a>
        </div>
      );
    })
  }

  return (
    <S.StyledCard className="m-6 p-8 title page">
      <>
        <header>
          <Heading size="xl" className="font-weight-bold">
            Looking forward to working with everyone!
          </Heading>
        </header>
        <p>{personalDetails.contactDescription}</p>
        <S.ResumeWrapper>
          <Button>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </S.ResumeWrapper>
      </>
      <S.ContactWrapper className="d-flex justify-content-center">
        {renderContacts()}
      </S.ContactWrapper>
    </S.StyledCard>
  );
}

export default Contact