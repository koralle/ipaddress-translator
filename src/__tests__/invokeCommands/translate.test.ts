import { mockIPC } from '@tauri-apps/api/mocks';
import { randomFillSync } from 'crypto';

import { invokeTranslate } from '../../invokeCommands/translate';

describe('Test: translate.ts', () => {
  beforeAll(() => {
    // @ts-ignore
    window.crypto = {
      getRandomValues: (buffer: NodeJS.ArrayBufferView) => randomFillSync(buffer),
    };
  });

  it('Promiseがresolveされたとき用のテスト', async () => {
    const mockFn = jest.fn().mockResolvedValue({ address: '02020202', subnet: '010101010' });
    mockIPC((): jest.Mock => {
      return mockFn();
    });

    expect.assertions(3);

    const res = await invokeTranslate({ ipv4Address: '192,168.1.10' });

    expect(res.address).toBe('02020202');
    expect(res.subnet).toBe('010101010');
    expect(mockFn).toHaveBeenCalled();
  });

  it('Promiseがrejectされたときのテスト', async () => {
    const errorMessage = 'Invalid IPv4 address syntax.';
    const mockFn = jest.fn().mockRejectedValue({ message: errorMessage });
    mockIPC((): jest.Mock => {
      return mockFn();
    });

    expect.assertions(2);
    try {
      await invokeTranslate({ ipv4Address: 'Invalid IPv4 address...' });
    } catch (e: unknown) {
      expect(mockFn).toHaveBeenCalled();
      expect(e).toEqual({ message: errorMessage });
    }
  });
});
