import { atom } from 'recoil';

const NO_ERROR = 'NO_ERROR' as const;

const errorState = atom<string>({
  key: 'error',
  default: NO_ERROR,
});

export { errorState, NO_ERROR };
