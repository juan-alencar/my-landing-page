import React from 'react';
import Switch from 'react-switch';

import { Container, Toggle, ToggleButton } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      {/* <Switch
        onChange={() => {}}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
      /> */}
      <div></div>

      <ul>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/drive/folders/19IhFclRTSXFtWi_lZ-ODQ-PGwvEidbMx?usp=sharing"
          >
            portfolio
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=5583986745363&text=Oi%2C%20vim%20atrav%C3%A9s%20da%20sua%20LandingPage%2C%20quero%20uma%20com%20a%20mesma%20qualidade!"
          >
            contact
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Menu;
