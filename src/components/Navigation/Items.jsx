import React from 'react';
import { Item } from './Item';
import { List } from './style';

export function Items({ meuLinkedin }) {
  return (
    <List>
      <Item meuLinkedin={meuLinkedin} />
    </List>
  );
}
