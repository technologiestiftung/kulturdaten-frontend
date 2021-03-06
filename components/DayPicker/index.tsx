import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useMemo, useRef, useState } from 'react';
import { useT } from '../../lib/i18n';
import { Breakpoint, useBreakpointOrWider } from '../../lib/WindowService';
import { StyledError } from '../Error';
import { Label } from '../label';
import { MouseTooltip } from '../MouseTooltip';

const errorShadow = '0px 0px 0px 0.1125rem var(--error-o50)';

const StyledDayPicker = styled.div<{ valid: boolean }>`
  display: flex;
  border: 1px solid var(--grey-600);
  border-radius: 0.375rem;
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 0.1875rem;
  padding: calc(0.375rem - 1px);
  min-width: min(100%, 22.5rem);

  ${({ valid }) =>
    !valid
      ? css`
          box-shadow: ${errorShadow};
          border-color: var(--error);
        `
      : ''}
`;

const StyledDayPickerDayName = styled.div`
  position: relative;
  padding: calc(0.375rem - 1px) calc(0.5rem - 1px);
  text-align: center;
  cursor: pointer;
  font-size: var(--font-size-300);
  line-height: var(--line-height-300);
  font-weight: 700;
`;

const StyledDayPickerDay = styled.div<{ checked: boolean }>`
  position: relative;
  border: 1px solid var(--black-o25);
  border-radius: 0.1875rem;
  background: ${({ checked }) => (checked ? 'var(--green-light)' : 'var(--grey-200)')};
  cursor: pointer;
  transition: background var(--transition-duration-fast);

  ${StyledDayPickerDayName} {
    ${({ checked }) =>
      checked
        ? css`
            text-decoration: underline;
          `
        : ''}
  }

  @media (pointer: fine) {
    &:hover {
      background: ${({ checked }) => (checked ? 'var(--green-light)' : 'var(--grey-400)')};
    }
  }
`;

const StyledDayPickerLabel = styled.div`
  padding-bottom: 0.375rem;
`;

const StyledDayPickerDayLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
`;

const StyledDayPickerDayCheckbox = styled.input`
  appearance: none;
  background: none;
  border: none;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.1875rem;
  cursor: pointer;
`;

export enum DayPickerMode {
  week = 'week',
}

const weekdays: {
  name: {
    long: string;
    short: string;
  };
}[] = [
  {
    name: {
      long: 'days.monday.long',
      short: 'days.monday.short',
    },
  },
  {
    name: {
      long: 'days.tuesday.long',
      short: 'days.tuesday.short',
    },
  },
  {
    name: {
      long: 'days.wednesday.long',
      short: 'days.wednesday.short',
    },
  },
  {
    name: {
      long: 'days.thursday.long',
      short: 'days.thursday.short',
    },
  },
  {
    name: {
      long: 'days.friday.long',
      short: 'days.friday.short',
    },
  },
  {
    name: {
      long: 'days.saturday.long',
      short: 'days.saturday.short',
    },
  },
  {
    name: {
      long: 'days.sunday.long',
      short: 'days.sunday.short',
    },
  },
];

export type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface DayPickerDayProps {
  index: number;
  long: string;
  short: string;
  state: Day[];
  changeHandler: (checked: boolean, index: number) => void;
}

const DayPickerDay: React.FC<DayPickerDayProps> = ({
  index,
  long,
  short,
  state,
  changeHandler,
}) => {
  const t = useT();
  const ref = useRef<HTMLLabelElement>(null);
  const isMidOrWider = useBreakpointOrWider(Breakpoint.mid);

  return (
    <StyledDayPickerDay
      key={index}
      aria-label={t(long) as string}
      role="checkbox"
      checked={state.includes(index as Day)}
    >
      {isMidOrWider && <MouseTooltip hoverElement={ref}>{t(long)}</MouseTooltip>}
      <StyledDayPickerDayLabel ref={ref}>
        <StyledDayPickerDayCheckbox
          type="checkbox"
          checked={state.includes(index as Day)}
          onChange={(e) => changeHandler(e.target.checked, index)}
        />
        <StyledDayPickerDayName>{t(short)}</StyledDayPickerDayName>
      </StyledDayPickerDayLabel>
    </StyledDayPickerDay>
  );
};

interface DayPicker {
  value?: Day[];
  onChange?: (value: Day[]) => void;
  mode?: DayPickerMode;
  min?: number;
  label?: string;
}

export const DayPicker: React.FC<DayPicker> = ({ value, onChange, min, label }: DayPicker) => {
  const [internalState, setInternalState] = useState<Day[]>([]);
  const t = useT();

  const state = value || internalState;

  const changeHandler = (checked: boolean, index: number): void => {
    const updateState = onChange || setInternalState;

    const updatedState = state.filter((day) => day !== index);

    updateState(checked ? [...updatedState, index as Day].sort() : updatedState);
  };

  const valid = useMemo(() => typeof min === 'undefined' || state.length >= min, [state, min]);

  return (
    <div>
      {label && (
        <StyledDayPickerLabel>
          <Label>{label}</Label>
        </StyledDayPickerLabel>
      )}
      <StyledDayPicker aria-label={t('dayPicker.ariaLabel') as string} role="group" valid={valid}>
        {weekdays.map(({ name: { short, long } }, index) => (
          <DayPickerDay key={index} {...{ index, short, long, changeHandler, state }} />
        ))}
      </StyledDayPicker>
      {!valid && <StyledError>{t('dayPicker.minError', { min })}</StyledError>}
    </div>
  );
};
