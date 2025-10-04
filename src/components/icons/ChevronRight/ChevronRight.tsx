// src/icons/Arrow/Arrow.tsx
import { SVGProps } from "react";

export default function ChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 20 20'
      width='1em'
      height='1em'
      fill='none'
      strokeWidth={1.5}
      stroke='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props} /* allows className, onClick, etc. */
    >
      <path d='m9 18 6-6-6-6' />
    </svg>
  );
}
