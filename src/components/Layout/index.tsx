import React from 'react';

import Monitor from '../../assets/monitor.svg';
import Robot1 from '../../assets/robot1.svg';
import Brain from '../../assets/brain.svg';
import Laptop from '../../assets/laptop.svg';
import Splash from '../../assets/splash.png';

import TableTechnologies from '../TableTechnologies';
import ThumbnailsPosts from '../ThumbnailsPosts';
import Menu from '../Menu';

import {
  Container,
  Section,
  Profile,
  Posts,
  Button,
  SplashImg,
  MonitorContainer,
  LeftContent,
  RightContent,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from './styles';
import ProfilePhoto from '../ProfilePhoto';

const Layout: React.FC = () => {
  return (
    <>
      <SplashImg>
        <img src={Splash} alt="splash" />
      </SplashImg>
      <Menu />
      <Container>
        <Section>
          <Profile>
            <img src={Robot1} alt="splash" />
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
        </Section>

        <Section>
          <LeftContent>
            <img src={Brain} alt="splash" />

            <h1>technologies</h1>
            <h1>and enthusiasm</h1>
            <p>
              I have a passion for React development, but the whole web universe
              excites me!
            </p>
            <p>New technologies and experiences is my fuel</p>
          </LeftContent>
          <TableTechnologies />
        </Section>

        <Section>
          <LeftContent>
            <img src={Laptop} alt="splash" />

            <h1>a little</h1>
            <h1>about my work</h1>
          </LeftContent>

          <RightContent>
            <GithubIcon />
            <a href="https://github.com/juan-alencar">
              <Button>portfolio</Button>
            </a>
          </RightContent>
        </Section>
        <Posts>
          <ThumbnailsPosts />
          <ThumbnailsPosts />
        </Posts>
        <Button className="more">more?</Button>

        <Section>
          <LeftContent>
            <img src={Laptop} alt="splash" />

            <h1>popular</h1>
            <h1>&&important posts</h1>
          </LeftContent>

          <RightContent>
            <LinkedinIcon />
            <TwitterIcon />
          </RightContent>
        </Section>
        <Posts>
          <ThumbnailsPosts />
          <ThumbnailsPosts />
        </Posts>
        <Section>
          <LeftContent>
            <img src={Brain} alt="splash" />

            <h1>about</h1>
            <h1>me, myself and I</h1>
            <span>persistence, proactivity and patience.</span>
            <p>
              are words that define my personality and my behavior in
              environments. The guy who is always there for the good of the
              team, and the project.
            </p>
            <span>in need, talk to me</span>
            <Button>contact me</Button>
          </LeftContent>
          <ProfilePhoto />
        </Section>
      </Container>
    </>
  );
};

export default Layout;
