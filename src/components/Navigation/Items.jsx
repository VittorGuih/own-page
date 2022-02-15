import React from 'react';
import { Item } from './Item';

export function Items({ meuLinkedin }) {
  return (
    <ul>
      <Item meuLinkedin={meuLinkedin} />
    </ul>
  );
}
