import React from 'react';

import { Container, Toggle, ToggleButton } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Toggle>
        <ToggleButton />
        <p>colorize mode</p>
      </Toggle>
      <ul>
        <li>
          <a href="https://twitter.com/home">about</a>
        </li>
        <li>
          <a href="https://twitter.com/home">portfolio</a>
        </li>
        <li>
          <a href="https://twitter.com/home">contact</a>
        </li>
      </ul>
    </Container>
  );
};

export default Menu;
