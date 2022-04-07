import React from 'react';

import Monitor from '../../assets/monitor.svg';
import Robot1 from '../../assets/robot1.svg';
import Robot2 from '../../assets/robot2.svg';
import Brain from '../../assets/brain.svg';
// import Laptop from '../../assets/laptop.svg';
// import Cloud from '../../assets/cloud1.svg';
import Splash from '../../assets/splash.png';

import ProfilePhoto from '../ProfilePhoto';
import TableTechnologies from '../TableTechnologies';
// import ThumbnailsPosts from '../ThumbnailsPosts';
import Menu from '../Menu';

import {
  Container,
  Section,
  Profile,
  Button,
  SplashImg,
  MonitorContainer,
  LeftContent,
} from './styles';
// import {
//   Container,
//   Section,
//   Profile,
//   Posts,
//   Button,
//   SplashImg,
//   MonitorContainer,
//   LeftContent,
//   RightContent,
//   GithubIcon,
//   LinkedinIcon,
//   TwitterIcon,
// } from './styles';

const Layout: React.FC = () => {
  return (
    <>
      <SplashImg>
        <img src={Splash} alt="Splash" />
      </SplashImg>
      <Menu />
      <Container>
        <Section>
          <Profile>
            <img src={Robot1} alt="Robot 1" />
            <h1>juan alencar</h1>
            <h3>full stack developer</h3>
            <p>
              I'm a web developer focused on UX | UI and clean code that is easy
              to maintain and understand
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5583986745363&text=Oi%2C%20vim%20atrav%C3%A9s%20da%20sua%20LandingPage%2C%20quero%20uma%20com%20a%20mesma%20qualidade!"
              target="_blank"
              rel="noreferrer"
            >
              <Button>contact me</Button>
            </a>
          </Profile>

          <MonitorContainer>
            <img src={Monitor} alt="Monitor" />
          </MonitorContainer>
        </Section>

        <Section>
          <LeftContent>
            <img src={Brain} alt="Brain" />

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

        {/* <Section id="portfolio">
          <LeftContent>
            <img src={Laptop} alt="Laptop" />

            <h1>a little</h1>
            <h1>about my work</h1>
          </LeftContent>

          <RightContent>
            <a
              href="https://github.com/juan-alencar"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              href="https://github.com/juan-alencar"
              target="_blank"
              rel="noreferrer"
            >
              <Button>portfolio</Button>
            </a>
          </RightContent>
        </Section>
        <Section className="sectionPosts">
          <Posts>
            <ThumbnailsPosts />
            <ThumbnailsPosts />
          </Posts>
          <Button className="more">more?</Button>
        </Section> */}

        {/* <Section>
          <LeftContent>
            <img src={Cloud} alt="Cloud" />

            <h1>popular&&</h1>
            <h1>important posts</h1>
          </LeftContent>

          <RightContent>
            <a
              href="https://www.linkedin.com/in/juan-alencar"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://twitter.com/juandmalencar"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </RightContent>
        </Section>
        <Section className="sectionPosts">
          <Posts>
            <ThumbnailsPosts />
            <ThumbnailsPosts />
          </Posts>
        </Section> */}
        <Section id="about">
          <LeftContent>
            <img src={Robot2} alt="Robot2" />

            <h1>about</h1>
            <h1>me, myself and I</h1>
            <span>persistence, proactivity and patience.</span>
            <p>
              are words that define my personality and my behavior in
              environments. The guy who is always there for the good of the
              team, and the project.
            </p>
            <span>in need, talk to me</span>
            <a
              href="https://api.whatsapp.com/send?phone=5583986745363&text=Oi%2C%20vim%20atrav%C3%A9s%20da%20sua%20LandingPage%2C%20quero%20uma%20com%20a%20mesma%20qualidade!"
              target="_blank"
              rel="noreferrer"
            >
              <Button>contact me</Button>
            </a>
          </LeftContent>
          <ProfilePhoto />
        </Section>
      </Container>
    </>
  );
};

export default Layout;
