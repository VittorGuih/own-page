import styled from 'styled-components';

export const FooterPage = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  min-height: 140px;
  background-color: #e6e7ff;
  color: #03045e;

  > p {
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;

    > span {
      font-weight: 600;
    }
  }
`;
