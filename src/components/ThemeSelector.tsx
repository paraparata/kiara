import { Select } from './Select';
import { useTheme } from '../lib/hooks/useTheme';

import type { Theme } from '../lib/hooks/useTheme';

type ThemeOption = {
  label: string;
  value: Theme;
};

const themes: ThemeOption[] = [
  { label: 'System', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

export const ThemeSelector = () => {
  const { theme, change } = useTheme();

  return (
    <Select
      value={theme}
      options={themes}
      onValueChange={(val) => {
        change(val as Theme);
      }}
    />
  );
};
