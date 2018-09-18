import styled from "styled-components";
import overlayTile from "../img/overlay_tile.png";
import { subContentFont, subTextColour, textColour } from "./meta";

export const PageWrapper = styled.div`
  display: flex;
  width: 70vw;
  padding: 3em;
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled.div`
  width; 100%;
  font-size: 2em;
  margin: 0.5em 0;
  
  color: ${subTextColour};
  
  text-align: center;
  text-transform: uppercase;
  font-family: ${subContentFont};
`;

export const SubPageTitle = styled.div`
  font-size: 1.5em;

  margin: 0 1em;
  text-transform: uppercase;

  text-align: center;
`;

export const SubPageDescription = styled.div`
  padding: 2em;
  font-size: 1em;
  white-space: pre-wrap;
`;

export const MobilePageTitle = styled(PageTitle)`
  font-size: 2.5em;
`;

export const MobileSubPageDescription = styled(SubPageDescription)`
  font-size: 1.5em;
`;
