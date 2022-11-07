import * as S from "./style";
import Profile from "./../assets/profile.jpg";

const Intro = () => {
  return (
    <div>
      <S.Title>Venkata Kishore Reddy Guttikonda</S.Title>
      <h1 style={{ textAlign: "center" }}>
        <span>------ </span>Frontend Developer
      </h1>
      <p style={{ textAlign: "center" }}>
        I'm Skilled Developer based in Noida, and I'm very passionate and
        dedicated to my work..
      </p>
      <S.ImageWrapper>
        <S.ProfileImage src={Profile} alt="Profile" />
      </S.ImageWrapper>
    </div>
  );
};

export default Intro;
