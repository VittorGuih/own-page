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

export function Content({ linkedin_link, github_link }) {
  return (
    <MainContent>
      <Container>
        <article>
          <ImageContent>
            <img
              src={mainBanner}
              alt='banner com garoto segurando um pincel de pintura olhando para uma tela de computador (ilustrativa)'
            />
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
            <SocialIcon
              href={linkedin_link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Ir para o pefil linkedin do Vittor Guilherme (Será aberto em outra aba)'
            >
              <img src={linkedin} role='presentation' />
            </SocialIcon>
            <SocialIcon
              href={github_link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Ir para o pefil github do Vittor Guilherme (Será aberto em outra aba)'
            >
              <img src={github} alt='' role='presentation' />
            </SocialIcon>
          </FooterIcons>
        </article>
      </Container>
    </MainContent>
  );
}
