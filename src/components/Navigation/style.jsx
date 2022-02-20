import styled from 'styled-components';
import { breakpoint } from '../Global/breakpt';

export const Navbar = styled.header`
  min-height: 5rem;
  display: flex;
  align-items: center;
`;
export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  list-style: none;
  padding: 0 1.5rem;
`;
export const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 13px;
  line-height: 127%;
  font-weight: 500;
  color: #03045e;
  text-decoration: underline;

  @media (${breakpoint.for_mobile_up}) {
    font-size: 18px;
  }

  &:hover {
    text-decoration: none;
  }
`;
