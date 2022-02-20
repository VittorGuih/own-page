import React from 'react';
import { Link } from './style';

export function Item({ meuLinkedin }) {
  return (
    <Link href={meuLinkedin} rel='noreferrer noopener'>
      <svg
        width='13'
        height='13'
        viewBox='0 0 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.57125 2.04206L8.6125 1.08331L3.25 6.44581L8.6125 11.8083L9.57125 10.8496L5.1675 6.44581L9.57125 2.04206Z'
          fill='#03045E'
        />
      </svg>
      <span>Ir ao meu perfil</span>
    </Link>
  );
}
