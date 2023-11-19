import { memo, SVGProps } from 'react';

const Group2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 58 58' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={28.6828} cy={28.6828} r={28.6828} fill='#DCA50B' />
    <path
      d='M50.8099 28.6828C50.8099 40.9031 40.9034 50.8095 28.6831 50.8095C16.4629 50.8095 6.5564 40.9031 6.5564 28.6828C6.5564 16.4625 16.4629 6.55606 28.6831 6.55606C40.9034 6.55606 50.8099 16.4625 50.8099 28.6828Z'
      fill='#D9D9D9'
    />
  </svg>
);

const Memo = memo(Group2Icon);
export { Memo as Group2Icon };
