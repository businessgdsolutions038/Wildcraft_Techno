import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const dark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`relative flex h-9 w-9 items-center justify-center rounded-full border border-midnight-100 bg-surface text-midnight-700 transition-colors duration-300 hover:border-electric-400 hover:text-electric-700 ${className}`}
    >
      <Sun className={`absolute h-[18px] w-[18px] transition-all duration-300 ${dark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
      <Moon className={`absolute h-[18px] w-[18px] transition-all duration-300 ${dark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
    </button>
  );
}
