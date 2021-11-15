import React from 'react';

import {
  Container,
  Columns,
  FigmaIcon,
  Css3AltIcon,
  Html5Icon,
  JsIcon,
  ReactLogoIcon,
  TypescriptIcon,
  NodeJsIcon,
  JavaIcon,
  PythonIcon,
  DockerIcon,
  GitIcon,
  PostgresqlIcon,
} from './styles';

const TableTechnologies: React.FC = () => {
  return (
    <Container>
      <table>
        <Columns>
          <td>
            <tr>
              <FigmaIcon />
            </tr>
            <tr>
              <Css3AltIcon />
            </tr>
            <tr>
              <Html5Icon />
            </tr>
          </td>
        </Columns>

        <Columns>
          <td>
            <tr>
              <JsIcon />
            </tr>
            <tr>
              <ReactLogoIcon />
            </tr>
            <tr>
              <TypescriptIcon />
            </tr>
          </td>
        </Columns>

        <Columns>
          <td>
            <tr>
              <NodeJsIcon />
            </tr>
            <tr>
              <JavaIcon />
            </tr>
            <tr>
              <PythonIcon />
            </tr>
          </td>
        </Columns>

        <Columns>
          <td>
            <tr>
              <DockerIcon />
            </tr>
            <tr>
              <GitIcon />
            </tr>
            <tr>
              <PostgresqlIcon />
            </tr>
          </td>
        </Columns>
      </table>
    </Container>
  );
};

export default TableTechnologies;
