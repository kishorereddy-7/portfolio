import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import * as S from './style'

const IconStyle = { fontSize: "xxx-large", margin: "0 10px" };

const Footer = () => {
  return (
    <S.Footer>
      <LinkedInIcon style={IconStyle} />
      <FacebookIcon style={IconStyle} />
      <GitHubIcon style={IconStyle} />
      <InstagramIcon style={IconStyle} />
      <TwitterIcon style={IconStyle} />
    </S.Footer>
  );
};

export default Footer;
