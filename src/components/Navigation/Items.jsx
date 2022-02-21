import React from 'react';
import { Item } from './Item';
import { List } from './style';

export function Items({ meuLinkedin }) {
  return (
    <List>
      <li>
        <Item meuLinkedin={meuLinkedin} />
      </li>
    </List>
  );
}
