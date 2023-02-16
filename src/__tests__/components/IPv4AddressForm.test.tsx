import '@testing-library/jest-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import { RecoilRoot } from 'recoil';

import { IPv4AddressForm } from '../../components/IPv4AddressForm';
import { IPv4AddressFormSchema, IPv4AddressFormSchemaType } from '../../models/networkInfo';

describe('IPv4AddressFormのテスト', () => {
  const mockOnSubmit = jest.fn(data => Promise.resolve(data));
  const labelText = 'IPv4 Address:';
  const inputLabelText = 'Type IPv4Address here...';

  beforeEach(() => {
    render(
      <RecoilRoot>
        <IPv4AddressForm onSubmit={mockOnSubmit} />
      </RecoilRoot>
    );
  });

  describe('コンポーネント画鋲がされているかのテスト', () => {
    it('ラベルが描画されていることの確認', () => {
      expect(screen.getByLabelText(/IPv4 Address:/i)).toBeInTheDocument();
    });

    it('入力フォームが描画されていることの確認', () => {
      expect(screen.getByLabelText(/Type IPv4Address here.../i)).toBeInTheDocument();
    });

    it('ボタンが描画されていることの確認', () => {
      expect(screen.getByRole('button', { name: /Translate/i })).toBeInTheDocument();
    });
  });

  describe('アクセシビリティのテスト', () => {
    it('ラベルをクリックするとinput要素にFocusが乗るはず', async () => {
      const label = screen.getByLabelText(labelText);

      const user = userEvent.setup();

      await user.click(label);

      expect(screen.getByLabelText(inputLabelText)).toHaveFocus();
    });
  });

  it('キーボード入力したIPv4アドレスがSubmitされるはず', async () => {
    const user = userEvent.setup();

    const input = screen.getByRole('textbox', { name: /Type IPv4Address here.../i });
    const submitButton = screen.getByRole('button', { name: /Translate/i });

    await user.type(input, '192.168.1.10');

    await user.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({ ipv4Address: '192.168.1.10' });
    });
  });
});

describe('IPv4AddressFormのロジックのテスト', () => {
  const reactHookFrom = renderHook(() =>
    useForm<IPv4AddressFormSchemaType>({
      resolver: zodResolver(IPv4AddressFormSchema),
      mode: 'onChange',
    })
  );

  const { setValue, handleSubmit } = reactHookFrom.result.current;

  it('`192.168.1.10`を値にセットすると、RHF内のvalueも`192.168.1.10`になるはず', () => {
    act(() => {
      setValue('ipv4Address', '192.168.1.10');
    });

    handleSubmit(data => {
      expect(data.ipv4Address).toBe('192.168.1.10');
    });
  });
});
