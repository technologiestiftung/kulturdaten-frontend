import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { Check } from 'react-feather';

const StyledCheckboxInput = styled.input`
  display: block;
  margin: 0;
  appearance: none;
  flex-grow: 0;
  flex-shrink: 0;
  width: var(--line-height-300);
  height: var(--line-height-300);
  background: var(--white);
  box-shadow: 0.0625rem 0.0625rem 0.25rem var(--black-o25);
  border: 1px solid var(--black);
  border-radius: 0.375rem;
  padding: 0;
  transition: border var(--transition-duration);
  cursor: inherit;

  &:disabled {
    border: none;
    box-shadow: none;
    background: var(--grey-350);
  }
`;

const StyledCheckbox = styled.div<{ disabled?: boolean }>`
  display: flex;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    ${StyledCheckboxInput} {
      border: 2px solid var(--black);

      &:disabled {
        border: none;
      }
    }
  }
`;

const StyledCheckboxInputContainer = styled.div`
  position: relative;
  width: var(--line-height-300);
  height: var(--line-height-300);
`;

const StyledCheckboxInputCheck = styled.div<{ checked?: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity var(--transition-duration-fast);
  pointer-events: none;

  ${({ checked }) =>
    checked
      ? css`
          opacity: 1;
        `
      : ''}

  svg {
    width: 1.125rem;
    height: 1.125rem;
    stroke-width: 0.1875rem;
  }
`;

const StyledCheckboxLabel = styled.label<{ disabled?: boolean }>`
  display: block;
  font-size: var(--font-size-300);
  line-height: var(--line-height-300);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: 0 0 0 0.75rem;
  flex-grow: 1;
`;

export interface CheckboxProps {
  id: string;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  onChange,
  checked,
  name,
  disabled,
  required,
}: CheckboxProps) => {
  const internalState = useState<boolean>(false);
  const checkedState = checked || internalState[0];

  return (
    <StyledCheckbox disabled={disabled}>
      <StyledCheckboxInputContainer>
        <StyledCheckboxInput
          type="checkbox"
          id={id}
          name={name || id}
          required={required}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
              onChange(e);
            } else {
              internalState[1](e.target.checked);
            }
          }}
          checked={checkedState}
          disabled={disabled}
        />
        <StyledCheckboxInputCheck checked={checkedState}>
          <Check color="var(--black)" />
        </StyledCheckboxInputCheck>
      </StyledCheckboxInputContainer>
      <StyledCheckboxLabel htmlFor={id} disabled={disabled}>
        {label}
      </StyledCheckboxLabel>
    </StyledCheckbox>
  );
};
