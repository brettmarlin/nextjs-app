import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2';
  const stylesByVariant: Record<string, string> = {
    primary: 'bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]',
    secondary:
      'border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10',
    ghost: 'hover:bg-black/5 dark:hover:bg-white/10',
  };
  const styles = `${base} ${stylesByVariant[variant]} ${className}`.trim();
  return <button className={styles} {...props} />;
}
