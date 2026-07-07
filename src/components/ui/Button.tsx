import type { ReactNode } from 'react';

type Size = 'sm' | 'md' | 'lg';

type Props = {
  href: string;
  children: ReactNode;
  size?: Size;
  target?: string;
  magnetic?: boolean;
  className?: string;
};

// Only box-shadow transitions in CSS — the transform is owned by GSAP (useMagnetic),
// so transitioning it here would fight the JS tween.
const base =
  'inline-flex items-center gap-2 bg-amber text-ink no-underline will-change-transform ' +
  'transition-shadow duration-300';

const sizes: Record<Size, string> = {
  sm: 'px-[17px] py-[10px] rounded-[7px] text-[13px] font-medium font-mono hover:shadow-[0_6px_22px_rgba(242,184,75,0.35)]',
  md: 'px-[30px] py-4 rounded-[9px] text-[15px] font-semibold font-display hover:shadow-[0_10px_30px_rgba(242,184,75,0.32)]',
  lg: 'px-[34px] py-[17px] rounded-[10px] text-base font-semibold font-display shadow-[0_8px_26px_rgba(242,184,75,0.22)] hover:shadow-[0_14px_40px_rgba(242,184,75,0.4)]',
};

export function Button({
  href,
  children,
  size = 'md',
  target,
  magnetic = true,
  className = '',
}: Props) {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener' : undefined}
      data-magnetic={magnetic ? '' : undefined}
      className={`${base} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
