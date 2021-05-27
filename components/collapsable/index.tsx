import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

const StyledCollapsable = styled.div``;

const StyledCollapsableContainer = styled.div<{ isCollapsed: boolean }>`
  ${({ isCollapsed }) =>
    isCollapsed
      ? css`
          height: 0;
          visibility: hidden;
          display: none;
        `
      : css`
          height: auto;
          visibility: inherit;
          display: inherit;
        `}
`;

interface WrappedCollapsableProps {
  children: React.ReactNode;
}

interface CollapsableProps extends WrappedCollapsableProps {
  isCollapsed: boolean;
}

export const Collapsable: React.FC<CollapsableProps> = ({
  children,
  isCollapsed,
}: CollapsableProps) => {
  return (
    <StyledCollapsable>
      <StyledCollapsableContainer isCollapsed={isCollapsed}>{children}</StyledCollapsableContainer>
    </StyledCollapsable>
  );
};

export const useCollapsable = (
  children: React.ReactNode,
  initiallyCollapsed: boolean
): {
  renderedCollapsable: React.ReactElement;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
} => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(initiallyCollapsed);

  return {
    renderedCollapsable: <Collapsable isCollapsed={isCollapsed}>{children}</Collapsable>,
    isCollapsed,
    setIsCollapsed,
  };
};