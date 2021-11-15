import styled, { css } from 'styled-components';

import { Whatsapp, Instagram } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  > img {
    max-width: 300px;
    box-shadow: 10px 10px 0px var(--primary);
  }
`;
export const Icons = styled.div``;

const IconCss = css`
  height: 40px;
  width: 40px;
  position: sticky;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const InstagramIcon = styled(Instagram)`
  ${IconCss}
`;
export const WhatsappIcon = styled(Whatsapp)`
  ${IconCss}
`;
