import styled from 'styled-components';
import { breakpoint } from '../Global/breakpt';

export const MainContent = styled.main`
  margin: 0 16px 40px 16px;

  @media (${breakpoint.for_mobile_up}) {
    margin-top: 48px;
  }
`;

export const ImageContent = styled.figure`
  margin: 0 auto;
  display: flex;
  min-width: 320px;
  max-width: 600px;
  min-height: 325px;
  height: 100%;
  width: 60%;
  grid-column-start: 1;
  grid-column-end: 5;

  @media (${breakpoint.for_tablet_up}) {
    grid-column-start: 3;
    grid-column-end: 6;
    width: 85%;
  }

  > img {
    width: 100%;
    height: 100%;
  }
`;
export const Description = styled.div`
  margin-top: 40px;
  color: #03045e;

  grid-column-start: 1;
  grid-column-end: 5;

  @media (${breakpoint.for_tablet_up}) {
    grid-column-end: 3;
    order: -1;
    align-self: center;
  }

  > h2 {
    font-weight: 800;
    font-size: 42px;
    line-height: 46px;
    color: currentColor;
  }
  > h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 35px;
    color: currentColor;
  }
  > p {
    margin: 8px 0 0 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 18px;
    color: #4d6ea8;
  }
`;

export const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 99px;
  height: 99px;
  border-radius: 50%;
  background-color: #e6e7ff;
  overflow: hidden;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
`;
export const FooterIcons = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 40px;
  grid-column-start: 1;
  grid-column-end: 5;

  @media (${breakpoint.for_tablet_up}) {
    margin-top: -40px;
    grid-column-end: 3;
  }
`;
export const GridContent = styled.article`
  display: grid;
  grid-template-columns: auto auto auto;
`;
