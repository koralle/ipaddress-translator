import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';

import { Button } from '../../components/Button';

describe('Buttonコンポーネントのユニットテスト', () => {
  const mockOnClick = jest.fn();
  beforeEach(() => {
    render(
      <RecoilRoot>
        <Button type='submit' onClick={mockOnClick}>
          Submit
        </Button>
      </RecoilRoot>
    );
  });

  it('`Submit`ボタンが描画されていることの確認', () => {
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('コンポーネントをクリックしたときにonClickが呼ばれることの確認', async () => {
    const button = screen.getByRole('button', { name: /Submit/i });
    const user = userEvent.setup();

    await user.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
