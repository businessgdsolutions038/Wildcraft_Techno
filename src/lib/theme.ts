import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const read = (): Theme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(read);

  // Follow the OS setting only until the visitor makes an explicit choice
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem('theme')) return;
      } catch { /* storage unavailable */ }
      apply(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const apply = (next: Theme) => {
    document.documentElement.classList.toggle('dark', next === 'dark');
    setTheme(next);
  };

  const toggle = useCallback(() => {
    const next: Theme = read() === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch { /* storage unavailable */ }
  }, []);

  return { theme, toggle };
}
