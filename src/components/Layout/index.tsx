import React from 'react';
import Monitor from '../../assets/monitor.svg';
import Splash from '../../assets/splash.png';

import {
  Container,
  Header,
  Toggle,
  ToggleButton,
  FirstSection,
  Profile,
  Button,
  // SplashImg,
  MonitorContainer,
} from './styles';

const Layout: React.FC = () => {
  return (
    <>
      {/* <SplashImg>
        <img src={Splash} alt="splash" />
      </SplashImg> */}
      <Container>
        <Header>
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
        </Header>
        <FirstSection>
          <Profile>
            <h1>juan alencar</h1>
            <h3>full stack developer</h3>
            <p>
              I'm a web developer focused on UX | UI and clean code that is easy
              to maintain and understand
            </p>
            <a href="https://twitter.com/home">
              <Button>contact me</Button>
            </a>
          </Profile>
          <MonitorContainer>
            <img src={Monitor} alt="Monitor" />
          </MonitorContainer>
        </FirstSection>
        {/* <SecondSection>

        </SecondSection> */}
      </Container>
    </>
  );
};

export default Layout;
