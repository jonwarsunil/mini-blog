'use client';

import Link from 'next/link';

export default function Button({ label, href, onClick, type = 'button', className = '' }) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold text-md rounded-md px-4 py-2 transition duration-200';

  const defaultVariant = 'bg-purple-500 text-white hover:bg-purple-700 cursor-pointer';

  const styles = `${baseStyles} ${defaultVariant} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {label}
    </button>
  );
}
