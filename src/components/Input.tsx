import type { FC, InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  className?: string;
};

const Input: FC<Props> = ({ value, className, ...props }) => {
  return <input value={value} className={className} {...props} />;
};

export { Input };
