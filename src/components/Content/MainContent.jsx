import React from 'react';
import { Container } from '../Container';
import mainBanner from '../../assets/images/main-banner.svg';
import linkedin from '../../assets/images/linkedin-icon.svg';
import github from '../../assets/images/github-icon.svg';
import {
  ImageContent,
  MainContent,
  Description,
  SocialIcon,
  FooterIcons,
} from './style';

export function Content() {
  return (
    <MainContent>
      <Container>
        <article>
          <ImageContent>
            <img src={mainBanner} alt='main-banner' />
          </ImageContent>
          <Description>
            <h2>Olá!</h2>
            <h3>Seja bem vindo(a)</h3>
            <p>
              Fique a vontade para voltar em outro momento e aproveite para
              visitar meus perfis abaixo.
            </p>
          </Description>
          <FooterIcons>
            <SocialIcon>
              <img src={linkedin} alt='' />
            </SocialIcon>
            <SocialIcon>
              <img src={github} alt='' />
            </SocialIcon>
          </FooterIcons>
        </article>
      </Container>
    </MainContent>
  );
}
