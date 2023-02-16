import type { FC } from 'react';

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }: Props) => {
  return (
    <header
      className='w-full h-10 leading-10 text-xl bg-color-main-neutral pl-3 font-main bg-color-main-bg'
      aria-label='app header'
    >
      <h1 color='text-color-text-neutral'>{title}</h1>
    </header>
  );
};

export { Header };
