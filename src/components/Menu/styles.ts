import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1200px;
    padding: 0 100px;
    margin: auto;
    width: 100%;
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
