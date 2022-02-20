import React from 'react';
import { Container } from '../Container';
import { Items } from './Items';
import { Navbar } from './style';

export function Navigation({ linkedin_link }) {
  return (
    <>
      <Navbar>
        {/* Nao vou utilizar a tag NAV, ja que o link aqui contido e externo. */}
        <Container>
          <Items meuLinkedin={linkedin_link} />
        </Container>
      </Navbar>
    </>
  );
}
