import React from 'react';

import { Container, Thumbnail, Informations } from './styles';

const ThumbnailsPosts: React.FC = () => {
  return (
    <Container>
      <Thumbnail />
      <Informations>
        <h3>title of work</h3>
        <p>little description</p>
      </Informations>
    </Container>
  );
};

export default ThumbnailsPosts;
