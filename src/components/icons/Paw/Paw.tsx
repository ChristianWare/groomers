import { SVGProps } from "react";

export default function Paw(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='currentColor'
      stroke='currentColor'
      strokeWidth={1}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-facebook-icon'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='11' cy='4' r='2' />
      <circle cx='18' cy='8' r='2' />
      <circle cx='20' cy='16' r='2' />
      <path d='M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z' />
    </svg>
  );
}
