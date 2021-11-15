import React from 'react';

import { Container, InstagramIcon, WhatsappIcon, Icons } from './styles';

const ProfilePhoto: React.FC = () => {
  return (
    <Container>
      <Icons>
        <InstagramIcon />
        <WhatsappIcon />
      </Icons>
      <img src="https://i.ibb.co/fSMPFvy/juan.png" alt="juanfoto" />
    </Container>
  );
};

export default ProfilePhoto;
