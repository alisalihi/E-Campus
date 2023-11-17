import { memo, SVGProps } from 'react';

const Line2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 913 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M913 1C913.552 1 914 0.552285 914 0C914 -0.552285 913.552 -1 913 -1V1ZM0 1H913V-1H0V1Z' fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Line2Icon);
export { Memo as Line2Icon };
