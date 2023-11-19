import { memo, SVGProps } from 'react';

const Line2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 886 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M886 1C886.552 1 887 0.552285 887 0C887 -0.552285 886.552 -1 886 -1V1ZM0 1H886V-1H0V1Z' fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Line2Icon);
export { Memo as Line2Icon };
