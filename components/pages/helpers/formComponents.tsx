import { css, SerializedStyles } from '@emotion/react';
import { insetBorder, mq } from '../../globals/Constants';
import { Breakpoint } from '../../../lib/WindowService';
import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import { StyledRequirementMark } from '../../Publish/Requirement';
import { Check } from 'react-feather';
import { useT } from '../../../lib/i18n';

const StyledFormWrapper = styled.div<{ required: boolean; fulfilled?: boolean }>`
  position: relative;

  ${({ required, fulfilled }) =>
    required &&
    css`
      &::before {
        content: '';
        height: 100%;
        position: absolute;
        width: 3px;
        background: ${fulfilled ? 'var(--green-publish)' : 'var(--red-publish)'};
        opacity: ${fulfilled ? '0.7' : '1'};
        left: -0.75rem;
        border-radius: 0px 1.5px 1.5px 0px;

        ${mq(Breakpoint.mid)} {
          left: -1.5rem;
        }

        ${mq(Breakpoint.widish)} {
          border-radius: 1.5px;
        }
      }
    `}
`;

const StyledFormWrapperRequirement = styled.div`
  font-size: var(--font-size-300);
  line-height: var(--line-height-300);
  font-weight: 700;
  display: flex;
  column-gap: 0.1875rem;
  padding: 0 0 0.375rem 0;
`;

export interface FormWrapperProps {
  children: React.ReactNode;
  requirement?: {
    fulfilled: boolean;
  };
}

export const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  requirement,
}: FormWrapperProps) => {
  const required = typeof requirement !== 'undefined';
  const fulfilled = requirement?.fulfilled;
  const t = useT();

  return (
    <StyledFormWrapper required={required} fulfilled={fulfilled}>
      {children}
      {required && (
        <StyledFormWrapperRequirement>
          <StyledRequirementMark fulfilled={fulfilled}>
            {fulfilled && <Check color="var(--green-publish)" />}
          </StyledRequirementMark>
          <span>{t(fulfilled ? 'requirements.isFulfilled' : 'requirements.notFulfilled')}</span>
        </StyledFormWrapperRequirement>
      )}
    </StyledFormWrapper>
  );
};

export const FormGrid = styled.div`
  display: grid;
  grid-row-gap: 1.5rem;
  grid-column-gap: 1.5rem;
  padding: 1.5rem 0;
  grid-template-columns: repeat(4, 1fr);
`;

export const FormText = styled.div`
  font-size: var(--font-size-400);
  line-height: var(--line-height-400);
  display: flex;
  flex-direction: column;
  row-gap: calc(var(--line-height-400) / 2);
`;
export const FormTextP = styled.p``;

export enum FormItemWidth {
  quarter = 'quarter',
  half = 'half',
  full = 'full',
}

export const formItemWidthMap: { [key in FormItemWidth]: SerializedStyles } = {
  quarter: css`
    grid-column: span 2;

    ${mq(Breakpoint.mid)} {
      grid-column: span 1;
    }
  `,
  half: css`
    grid-column: span 4;

    ${mq(Breakpoint.mid)} {
      grid-column: span 2;
    }
  `,
  full: css`
    grid-column: span 4;
  `,
};

const StyledFormItem = styled.div<{
  width: FormItemWidth;
  alignSelf?: string;
  customCss?: SerializedStyles;
}>`
  ${({ width }) => formItemWidthMap[width]}
  align-self: ${({ alignSelf }) => alignSelf || 'stretch'};

  display: flex;
  flex-direction: row;
  column-gap: 0.75rem;
  row-gap: 0.75rem;
  align-items: flex-start;
  flex-wrap: wrap;

  ${({ customCss }) => customCss}
`;

export const FormContainer = styled.div`
  padding: 0 0 1.5rem;
`;

const StyledFormItemChild = styled.div<{ flexGrow?: string }>`
  flex-grow: ${({ flexGrow }) => flexGrow || '1'};
`;

interface FormItemProps {
  width: FormItemWidth;
  alignSelf?: string;
  childrenFlexGrow?: string;
  css?: SerializedStyles;
}

export const FormItem: React.FC<PropsWithChildren<FormItemProps>> = ({
  children,
  width,
  alignSelf,
  childrenFlexGrow,
  css,
}: PropsWithChildren<FormItemProps>) => (
  <StyledFormItem width={width} alignSelf={alignSelf} customCss={css}>
    {React.Children.toArray(children).map((child, index) => (
      <StyledFormItemChild key={index} flexGrow={childrenFlexGrow}>
        {child}
      </StyledFormItemChild>
    ))}
  </StyledFormItem>
);

export const FormButtons = styled.div`
  padding: 0.75rem 0;
  box-shadow: ${insetBorder(false, false, true)};
  display: flex;
  justify-content: flex-start;

  & > :last-of-type {
    margin-left: 0.75rem;
  }
`;
