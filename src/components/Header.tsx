import type { FC } from 'react';

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }: Props) => {
  return (
    <header className='w-full h-10 leading-10 text-xl' aria-label='app header'>
      {title}
    </header>
  );
};

export { Header };
