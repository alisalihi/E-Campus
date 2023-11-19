import { memo, SVGProps } from 'react';

const Group1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 73 73' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={36.5} cy={36.5} r={36.5} fill='#D9D9D9' fillOpacity={0.3} />
    <path
      d='M64.6571 36.5C64.6571 52.0508 52.0507 64.6572 36.5 64.6572C20.9492 64.6572 8.34282 52.0508 8.34282 36.5C8.34282 20.9493 20.9492 8.34288 36.5 8.34288C52.0507 8.34288 64.6571 20.9493 64.6571 36.5Z'
      fill='#D9D9D9'
    />
    <ellipse
      cx={54.75}
      cy={58.4}
      rx={6.77857}
      ry={6.25714}
      fill='#25BF2D'
      stroke='white'
      strokeOpacity={0.3}
      strokeWidth={4}
    />
  </svg>
);

const Memo = memo(Group1Icon);
export { Memo as Group1Icon };
