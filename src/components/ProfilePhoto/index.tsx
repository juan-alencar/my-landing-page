import React from 'react';

import { Container, LinkedinIcon, WhatsappIcon, Icons } from './styles';

const ProfilePhoto: React.FC = () => {
  return (
    <Container>
      <Icons>
        <a
          href="https://www.linkedin.com/in/juan-alencar"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5583986745363&text=Oi%2C%20vim%20atrav%C3%A9s%20da%20sua%20LandingPage%2C%20quero%20uma%20com%20a%20mesma%20qualidade!"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsappIcon />
        </a>
      </Icons>
      {/* <img src="https://i.ibb.co/fSMPFvy/juan.png" alt="juanfoto" /> */}
    </Container>
  );
};

export default ProfilePhoto;
