import React from 'react';
import * as SelectR from '@radix-ui/react-select';
import './Select.css';

import { CaretDown, CaretUp, Check } from '@phosphor-icons/react';

type OptionType<K> = {
  label: string;
  value: K;
};

type GroupedOptionsType<K> = {
  group: string;
  options: OptionType<K>[];
};

type GroupedOptionsProps<K> = {
  noSeparator?: boolean;
} & GroupedOptionsType<K>;

const GroupedOptions = <K,>({
  noSeparator,
  group,
  options,
}: GroupedOptionsProps<K>) => (
  <>
    <SelectR.Group>
      <SelectR.Label className='SelectLabel'>{group}</SelectR.Label>
      {options.map((option) => (
        <SelectItem key={`${option.value}`} value={`${option.value}`}>
          {option.label}
        </SelectItem>
      ))}
    </SelectR.Group>
    {!noSeparator && <SelectR.Separator className='SelectSeparator' />}
  </>
);

interface CustomSelectProps<T, K> extends SelectR.SelectProps {
  options: T extends true ? GroupedOptionsType<K>[] : OptionType<K>[];
  grouped?: T;
  placeholder?: string;
  ariaLabel?: string;
}

export const Select = <T, K>({
  options,
  grouped,
  placeholder,
  ariaLabel,
  ...props
}: CustomSelectProps<T, K>) => (
  <SelectR.Root {...props}>
    <SelectR.Trigger className='SelectTrigger' aria-label={ariaLabel}>
      <SelectR.Value placeholder={placeholder} />
      <SelectR.Icon className='SelectIcon'>
        <CaretDown weight='light' />
      </SelectR.Icon>
    </SelectR.Trigger>
    <SelectR.Portal>
      <SelectR.Content className='SelectContent'>
        <SelectR.ScrollUpButton className='SelectScrollButton'>
          <CaretUp weight='light' />
        </SelectR.ScrollUpButton>
        <SelectR.Viewport className='SelectViewport'>
          {options.map((option, index) => {
            if (Object.keys(option).includes('group')) {
              const opt = option as GroupedOptionsType<K>;
              return (
                <GroupedOptions
                  key={opt.group}
                  group={opt.group}
                  options={opt.options}
                  noSeparator={index === options.length - 1}
                />
              );
            } else {
              const opt = option as OptionType<K>;
              return (
                <SelectItem key={`${opt.value}`} value={`${opt.value}`}>
                  {opt.label}
                </SelectItem>
              );
            }
          })}
        </SelectR.Viewport>
        <SelectR.ScrollDownButton className='SelectScrollButton'>
          <CaretDown weight='light' />
        </SelectR.ScrollDownButton>
      </SelectR.Content>
    </SelectR.Portal>
  </SelectR.Root>
);

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  SelectR.SelectItemProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <SelectR.Item
      className={`SelectItem ${className}`}
      {...props}
      ref={forwardedRef}
    >
      <SelectR.ItemText>{children}</SelectR.ItemText>
      <SelectR.ItemIndicator className='SelectItemIndicator'>
        <Check weight='light' />
      </SelectR.ItemIndicator>
    </SelectR.Item>
  );
});
