import styled, { css } from 'styled-components';

import { Whatsapp, Instagram, Linkedin } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  margin-top: 24px;
  > img {
    max-width: 300px;
    box-shadow: 10px 10px 0px var(--primary);
  }

  @media (min-width: 900px) {
    flex-direction: column;
    margin-top: 0;
  }
`;
export const Icons = styled.div`
  margin-top: 20px;
`;

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
export const LinkedinIcon = styled(Linkedin)`
  ${IconCss}
`;
