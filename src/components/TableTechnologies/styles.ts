import styled, { css } from 'styled-components';
import {
  Js,
  NodeJs,
  ReactLogo,
  Java,
  Html5,
  Css3Alt,
  Python,
  Docker,
  Figma,
  Git,
  Postgresql,
  Typescript,
} from '../../styles/Icons';

export const Container = styled.div`
  > table {
    display: flex;
    flex-direction: row;
    border-collapse: collapse;
  }
`;
export const Columns = styled.div`
  > td {
    > tr {
      display: flex;
      align-items: center;
      height: 70px;
    }
  }
  padding: 10px 20px;
  border-right: 1px solid;
  border-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      #fff,
      rgba(0, 0, 0, 0)
    )
    1 100%;
  &:first-child {
    border-left: 1px solid;
    border-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        #fff,
        rgba(0, 0, 0, 0)
      )
      1 100%;
  }

  /* border-left: 1px solid; */
  @media (min-width: 500px) {
    > td {
      > tr {
        height: 85px;
      }
    }
    padding: 25px 7vw;
  }
  @media (min-width: 900px) {
    > td {
      > tr {
        height: 85px;
      }
    }
    padding: 25px 40px;
  }
`;

const IconCss = css`
  width: 35px;
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
export const TypescriptIcon = styled(Typescript)`
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
export const PostgresqlIcon = styled(Postgresql)`
  ${IconCss}
`;
