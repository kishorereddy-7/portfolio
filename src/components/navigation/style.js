import styled from "styled-components";
import { HorizontalNav } from "@innovaccer/design-system";

export const NavigationWrapper = styled.div`
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 15px;
  box-shadow: 5px 5px 5px black;
`;

export const NavigationMenu = styled(HorizontalNav)`
  @media (max-width: 768px) {
    .HorizontalNav-menu span {
      display: none;
    }
  }
`;