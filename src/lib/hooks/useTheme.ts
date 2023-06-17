import { useCallback, useEffect, useRef, useSyncExternalStore } from 'react';

export type Theme = 'system' | 'light' | 'dark';

let theme: Theme = 'system';

const getSnapshot = () => theme;

let listeners: any[] = [];
const subscribe = (listener: any) => {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};

const emitChange = () => {
  for (const listener of listeners) {
    listener();
  }
};

export const useTheme = (key = 'theme') => {
  const KEY = useRef(key);
  const _theme = useSyncExternalStore(subscribe, getSnapshot);

  const change = useCallback((value: Theme) => {
    localStorage.setItem(KEY.current, value);
    theme = value;
    emitChange();

    if (value === 'system') document.body.removeAttribute('data-theme');
    else document.body.setAttribute('data-theme', value);
  }, []);

  useEffect(() => {
    const lsTheme = localStorage.getItem(KEY.current) as Theme | null;
    if (lsTheme) change(lsTheme);
  }, [change]);

  return {
    theme: _theme,
    change,
  };
};
