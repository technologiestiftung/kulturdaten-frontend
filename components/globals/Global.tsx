import { Global as EmotionGlobal, css } from '@emotion/react';

export const Global: React.FC = () => (
  <EmotionGlobal
    styles={css`
      html,
      body {
        color: var(--black);
        background: var(--white);
        width: 100%;

        * {
          letter-spacing: -0.005em;
        }
      }
    `}
  />
);
