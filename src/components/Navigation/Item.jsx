import React from 'react';

export function Item({ meuLinkedin }) {
  return (
    <a href={meuLinkedin} rel='noreferrer noopener'>
      Ir ao meu perfil
    </a>
  );
}
