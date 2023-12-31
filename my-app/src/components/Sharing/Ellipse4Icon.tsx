import { memo, SVGProps } from 'react';

const Ellipse4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 108 108' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={54} cy={54} r={54} fill='#4BCC4E' />
  </svg>
);

const Memo = memo(Ellipse4Icon);
export { Memo as Ellipse4Icon };
