type LogoProps = {
  className?: string;
  variant?: 'light' | 'dark';
};

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const primary = variant === 'light' ? '#ffffff' : 'hsl(212 68% 20%)';
  const accent = 'hsl(190 88% 38%)';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="40" height="40" rx="4" fill={primary} />
        <path
          d="M10 30 L22 12 L34 30"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 30 L14 36 M22 30 L22 36 M30 30 L30 36"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 30 L34 30"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <div className={`flex flex-col leading-none`}>
        <span
          className="text-lg font-bold tracking-tight"
          style={{ color: primary }}
        >
          Rah Gostar Valash
        </span>
        <span
          className="text-[10px] font-medium tracking-wider"
          style={{ color: variant === 'light' ? 'rgba(255,255,255,0.6)' : 'hsl(190 88% 38%)' }}
        >
          RAH GOSTAR VALASH
        </span>
      </div>
    </div>
  );
}
