import { memo, SVGProps } from 'react';

const Group2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 59 58' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={29.5236} cy={28.8781} r={28.6828} fill='#DCA50B' />
    <path
      d='M51.6507 28.8781C51.6507 41.0984 41.7442 51.0049 29.524 51.0049C17.3037 51.0049 7.39722 41.0984 7.39722 28.8781C7.39722 16.6579 17.3037 6.75137 29.524 6.75137C41.7442 6.75137 51.6507 16.6579 51.6507 28.8781Z'
      fill='#D9D9D9'
    />
  </svg>
);

const Memo = memo(Group2Icon);
export { Memo as Group2Icon };
