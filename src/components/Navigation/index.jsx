import React from 'react';
import { Items } from './Items';

export function Header() {
  let meuLinkedin = 'https://google.com.br';
  return (
    <>
      <header>
        {/* Nao vou utilizar a tag NAV, ja que o link aqui contido e externo. */}
        <Items meuLinkedin={meuLinkedin} />
      </header>
    </>
  );
}
