import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import React from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};
const Button: FC<Props> = ({ children, className, ...props }: Props) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export { Button };
