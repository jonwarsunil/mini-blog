export const EyeIcon = ({ className = 'w-5 h-5 text-gray-500' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={className}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M2.25 12C3.75 7.5 7.5 4.5 12 4.5s8.25 3 9.75 7.5c-1.5 4.5-5.25 7.5-9.75 7.5s-8.25-3-9.75-7.5z'
    />
    <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
  </svg>
);

export const LikeIcon = ({ className = 'w-5 h-5 text-gray-500' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={className}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M14 9l1.5-4.5A2 2 0 0013.5 2h-1.75a2 2 0 00-2 1.75L9.75 7H5.25C4.01 7 3 8.01 3 9.25v6.5C3 16.99 4.01 18 5.25 18h7.5c.76 0 1.43-.43 1.75-1.1l2.34-4.68a2 2 0 00-.86-2.62L14 9z'
    />
  </svg>
);

export const DislikeIcon = ({ className = 'w-5 h-5 text-gray-500' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={className}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10 15l-1.5 4.5A2 2 0 0010.5 22h1.75a2 2 0 002-1.75l.25-3.25h4.5c1.24 0 2.25-.99 2.25-2.25v-6.5C21.25 7.01 20.24 6 19 6h-7.5c-.76 0-1.43.43-1.75 1.1l-2.34 4.68a2 2 0 00.86 2.62L10 15z'
    />
  </svg>
);
