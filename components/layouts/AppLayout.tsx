import styled from '@emotion/styled';
import { useContext, useEffect, useRef } from 'react';
import 'wicg-inert';

import { Breakpoint, useBreakpointOrWider, WindowContext } from '../../lib/WindowService';
import { mq } from '../globals/Constants';
import { MainMenuProps, useMainMenuOverlayVisible } from '../navigation/mainMenu/MainMenu';
import { NavigationContext } from '../navigation/NavigationContext';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto 1fr;
  width: 100%;
  height: var(--app-height);
  overflow: hidden;
  align-content: flex-start;
  justify-items: stretch;

  ${mq(Breakpoint.mid)} {
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto 1fr;
  }

  ${mq(Breakpoint.wide)} {
    grid-template-rows: auto;
    align-content: flex-start;
    grid-template-columns: repeat(12, 1fr);
  }
`;

const MenuSlot = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 3rem;
  max-height: 3rem;
  z-index: 1000;
  grid-column: 1 / span 4;
  align-self: flex-start;

  ${mq(Breakpoint.mid)} {
    grid-column: 1 / span 3;
  }

  ${mq(Breakpoint.wide)} {
    grid-column: 1 / span 2;
    height: unset;
    max-height: unset;
  }
`;

const TitleBarSlot = styled.div<{ disabled?: boolean }>`
  position: relative;
  grid-column: 1 / span 4;
  align-self: flex-start;

  ${mq(Breakpoint.mid)} {
    grid-column: 4 / -1;
  }

  ${mq(Breakpoint.wide)} {
    align-self: stretch;
    grid-column: 3 / -1;
  }
`;

const ContentSlot = styled.div<{ disabled?: boolean }>`
  position: relative;
  grid-column: 1 / span 4;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: inset -1px -1px 0px var(--grey-400), inset 1px 0px 0px var(--grey-400);

  ${mq(Breakpoint.mid)} {
    grid-column: 1 / -1;
  }

  ${mq(Breakpoint.wide)} {
    flex-grow: 1;
    box-shadow: inset -1px -1px 0px var(--grey-400);
    grid-column: 3 / -1;
  }
`;

const TitleAndContentContainer = styled.div`
  max-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${mq(Breakpoint.wide)} {
    grid-column: 3 / -1;
  }
`;

const MainMenuOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--black);
  opacity: 0.7;
  z-index: 999;
  cursor: pointer;
`;

interface AppLayoutProps {
  mainMenu: React.ReactElement<MainMenuProps>;
  content: React.ReactNode;
  titleBar: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  mainMenu,
  titleBar,
  content,
}: AppLayoutProps) => {
  const isWideOrWider = useBreakpointOrWider(Breakpoint.wide);
  const isMainMenuOverlayVisible = useMainMenuOverlayVisible();
  const { setMainMenuOpen } = useContext(NavigationContext);
  const { rendered } = useContext(WindowContext);
  const titleBarRef = useRef<HTMLDivElement>();
  const contentSlotRef = useRef<HTMLDivElement>();

  // Add "inert" attribute to elements behind MainMenuOverlay.
  // Inert is a new web standard which marks elements as not interactive while keeping them visible.
  // Think of "visiblity: hidden" but still visible.
  // Used for preventing not/partially visible elements from being focusable via tabbing.
  useEffect(() => {
    if (isMainMenuOverlayVisible) {
      titleBarRef.current?.setAttribute('inert', '');
      contentSlotRef.current?.setAttribute('inert', '');
    } else {
      titleBarRef.current?.removeAttribute('inert');
      contentSlotRef.current?.removeAttribute('inert');
    }
  }, [isMainMenuOverlayVisible]);

  const renderedTitleBar = titleBar ? (
    <TitleBarSlot ref={titleBarRef}>{titleBar}</TitleBarSlot>
  ) : (
    ''
  );

  const renderedContentSlot = <ContentSlot ref={contentSlotRef}>{content}</ContentSlot>;

  const titleAndContent = isWideOrWider ? (
    <TitleAndContentContainer>
      {renderedTitleBar}
      {renderedContentSlot}
    </TitleAndContentContainer>
  ) : (
    <>
      {renderedTitleBar}
      {renderedContentSlot}
    </>
  );

  return (
    <Container>
      <MenuSlot>{mainMenu}</MenuSlot>
      {rendered ? titleAndContent : ''}
      {isMainMenuOverlayVisible ? <MainMenuOverlay onClick={() => setMainMenuOpen(false)} /> : ''}
    </Container>
  );
};