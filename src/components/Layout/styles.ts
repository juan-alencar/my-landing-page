import styled, { css } from 'styled-components';
import {
  Js,
  NodeJs,
  ReactLogo,
  Java,
  Html5,
  Css3Alt,
  Python,
  Github,
  Whatsapp,
  Docker,
  Linkedin,
  Instagram,
  Twitter,
  Figma,
  Git,
  Postgresql,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  margin: auto;

  position: relative;
`;

// export const SplashImg = styled.div`
//   display: none;
//   @media (min-width: 1000px) {
//     display: flex;
//     z-index: -9;
//     position: absolute;
//     right: 0;
//     -webkit-blend-mode: overlay;
//     mix-blend-mode: overlay;
//     opacity: 50%;
//   }
// `;

/* ----------------------- HEADER ----------------------------------*/

export const Header = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: space-between;

    width: 100%;
    padding: 0 100px;
    padding-top: 40px;

    font-weight: bold;
    font-size: 24px;

    > ul {
      display: flex;
      > li {
        list-style: none;
        margin-left: 42px;
        > a {
          text-decoration: none;
        }
      }
    }
  }
`;
export const Toggle = styled.div`
  align-items: center;
  display: flex;
`;
export const ToggleButton = styled.div`
  height: 24px;
  width: 60px;
  border-radius: 12px;
  background: var(--secondary);
  margin-right: 12px;
`;

/* --------------------------         FIM DO HEADER      --------------------------------------*/

export const FirstSection = styled.div`
  padding: 0 100px;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0 10%;
  > h1 {
    max-width: 300px;
    font-size: 4.9rem;
    line-height: 0.875;
    margin-bottom: 16px;
  }
  > h3 {
    font-size: 1.5rem;
    padding: 6px 12px;
    background: var(--primary);
    margin-bottom: 16px;
  }
  > p {
    max-width: 260px;
    font-size: 1.1em;
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const MonitorContainer = styled.div`
  display: flex;
  position: absolute;
  top: 5%;

  > img {
    width: 150px;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

// ---------------------------------------- BUTTON AND ICONS ----------------------------------------

export const Button = styled.button`
  background: var(--primary);
  padding: 12px 16px;

  font-size: 1.4rem;
  font-weight: bold;

  cursor: pointer;
  transition: 0.35s;

  &:hover {
    background: var(--primary-hover);
  }
`;

const IconCss = css`
  height: 50px;
  width: 50px;
  position: sticky;
`;

export const FigmaIcon = styled(Figma)`
  ${IconCss}
`;
export const JsIcon = styled(Js)`
  ${IconCss}
`;
export const NodeJsIcon = styled(NodeJs)`
  ${IconCss}
`;
export const ReactLogoIcon = styled(ReactLogo)`
  ${IconCss}
`;
export const JavaIcon = styled(Java)`
  ${IconCss}
`;
export const Html5Icon = styled(Html5)`
  ${IconCss}
`;
export const Css3AltIcon = styled(Css3Alt)`
  ${IconCss}
`;
export const PythonIcon = styled(Python)`
  ${IconCss}
`;
export const DockerIcon = styled(Docker)`
  ${IconCss}
`;
export const GitIcon = styled(Git)`
  ${IconCss}
`;
export const GithubIcon = styled(Github)`
  ${IconCss}
`;
export const PostgresqlIcon = styled(Postgresql)`
  ${IconCss}
`;
export const LinkedinIcon = styled(Linkedin)`
  ${IconCss}
`;
export const InstagramIcon = styled(Instagram)`
  ${IconCss}
`;
export const WhatsappIcon = styled(Whatsapp)`
  ${IconCss}
`;
export const TwitterIcon = styled(Twitter)`
  ${IconCss}
`;
