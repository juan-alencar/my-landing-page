import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Thumbnail = styled.div`
  width: 100%;
  border: 2px solid #fff;
  padding-bottom: 56.25%;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 90%;
    padding-bottom: 50.625%;
  }
`;
export const Informations = styled.div``;
