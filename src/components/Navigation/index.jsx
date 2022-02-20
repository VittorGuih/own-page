import React from 'react';
import { Container } from '../Container';
import { Items } from './Items';
import { Navbar } from './style';

export function Navigation() {
  let meuLinkedin = 'https://google.com.br';
  return (
    <>
      <Navbar>
        {/* Nao vou utilizar a tag NAV, ja que o link aqui contido e externo. */}
        <Container>
          <Items meuLinkedin={meuLinkedin} />
        </Container>
      </Navbar>
    </>
  );
}
