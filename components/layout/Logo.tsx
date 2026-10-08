import Image from 'next/image';

type LogoProps = {
  className?: string;
  variant?: 'light' | 'dark';
};

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const primary = variant === 'light' ? '#ffffff' : 'hsl(212 68% 20%)';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-11 w-11 shrink-0 overflow-hidden rounded-[8px] bg-white">
        <Image
          src="/images/company/velash-logo.webp"
          alt=""
          width={44}
          height={44}
          className="block h-full w-full object-contain"
          aria-hidden="true"
        />
      </div>
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
