import styled from "styled-components";
import { Heading } from "@innovaccer/design-system";

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  border-radius: 10%;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-family: monospace;
  text-align: center;
`;

export const StyledSubHeading = styled(Heading)`
  text-align: right;
`;

export const Greating = styled.p`
  text-align: center;
`;
