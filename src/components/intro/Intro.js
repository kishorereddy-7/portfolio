import * as S from "./style";
import Profile from "./../assets/profile.jpg";
import { Skeleton } from "@mui/material";

const Loader = (width) => {
  return (
    <Skeleton
      animation="wave"
      width={width}
      style={{ marginLeft: "auto", marginRight: "auto" }}
    />
  );
};

const Intro = ({ loading, person, detailsError }) => {
  const renderDetails = () => {
    if (detailsError) {
      return <h1>Something went wrong</h1>;
    }

    return (
      <>
        <S.Title>
          {loading ? (
            <Loader width={500} />
          ) : (
            person.first_name + " " + person.last_name
          )}
        </S.Title>
        <h1 style={{ textAlign: "center" }}>
          <span>------ </span>
          {loading ? <Loader width={400} /> : "Frontend Developer"}
          <span> ------</span>
        </h1>
        <p style={{ textAlign: "center" }}>
          {loading ? <Loader width={600} /> : person.description}
        </p>
      </>
    );
  };
  return (
    <div>
      {renderDetails()}
      <S.ImageWrapper>
        <S.ProfileImage src={Profile} alt="Profile" />
      </S.ImageWrapper>
    </div>
  );
};

export default Intro;
