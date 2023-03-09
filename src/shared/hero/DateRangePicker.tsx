import { useId, useState } from 'react';
import { FocusedInputShape } from 'react-dates';
import { DateRange } from 'src/@type/date';

type Props = {
  value?: DateRange;
  defaultFocused?: FocusedInputShape;
  onChange?: (value: DateRange) => void;
  onFocusChange?: (value: FocusedInputShape) => void;
  className?: string;
  fieldClassName?: string;
  wrapperClassName?: string;
};

const DateRangePicker = ({
  value,
  defaultFocused,
  onChange,
  onFocusChange,
  className,
  fieldClassName,
  wrapperClassName,
}: Props) => {
  const [focusedState, setFocusedState] = useState<FocusedInputShape | undefined>(defaultFocused);
  const [dateState, setDateState] = useState<DateRange | undefined>(value);
  const [startDateId, enDateId] = [useId(), useId()];

  return <div>DateRangePicker</div>;
};

export default DateRangePicker;
