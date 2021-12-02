import styled, { css } from 'styled-components';
import {
  Github,
  Whatsapp,
  Linkedin,
  Instagram,
  Twitter,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 100px;
  max-width: 1200px;
  margin: auto;

  position: relative;
`;

export const SplashImg = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    z-index: -9;
    position: absolute;
    right: 0;
    -webkit-blend-mode: overlay;
    mix-blend-mode: overlay;
    opacity: 50%;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  &:first-child {
    flex-direction: column-reverse;
    height: 90vh;
    margin-top: 0;
    margin-bottom: 0;
  }

  &:last-child {
    margin-bottom: 100px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    &:first-child {
      height: 85vh;
      flex-direction: row;
      margin-bottom: -100px;
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

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
    line-height: 1.2;
    max-width: 260px;
    font-size: 1.1em;
    margin-bottom: 16px;
  }

  > img {
    display: none;
  }

  @media (min-width: 768px) {
    > img {
      display: flex;
      position: absolute;
      left: -25%;
      width: 80px;
    }
  }
`;

export const MonitorContainer = styled.div`
  display: none;
  @media (min-height: 700px) {
    display: flex;
    margin-bottom: 50px;

    > img {
      width: 150px;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    > img {
      width: 30vw;
      max-width: 380px;
    }
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  > h1 {
    margin-bottom: 5px;
    font-size: 2.5rem;
    line-height: 0.875;
    &:last-of-type {
      margin-bottom: 16px;
    }
  }
  > h3 {
    font-size: 1.5rem;
    padding: 6px 12px;
    background: var(--primary);
    margin-bottom: 16px;
  }

  > p {
    line-height: 1.2;
    max-width: 260px;
    font-size: 1.1em;
    &:last-of-type {
      margin-bottom: 16px;
    }
  }

  > span {
    line-height: 1.2;
    font-size: 1.1em;
    font-weight: bold;
    &:last-of-type {
      margin-bottom: 16px;
    }
  }
  > img {
    display: none;
  }

  @media (min-width: 768px) {
    > img {
      display: flex;
      position: absolute;
      left: -25%;
      width: 60px;
    }
  }
`;

export const RightContent = styled.div``;
export const Posts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// ---------------------------------------- BUTTON AND ICONS ----------------------------------------

export const Button = styled.button`
  background: var(--primary);
  padding: 12px 16px;
  width: 220px;

  font-size: 1.4rem;
  font-weight: bold;

  cursor: pointer;
  transition: 0.35s;

  &.more {
    margin-top: 15px;
    width: fit-content;
    padding: 6px 16px;
    font-size: 1.2rem;
  }

  &:hover {
    background: var(--primary-hover);
  }
`;

const IconCss = css`
  height: 40px;
  width: 40px;
  position: sticky;
  margin-right: 10px;
`;

export const GithubIcon = styled(Github)`
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
