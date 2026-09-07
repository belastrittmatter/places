import { Text } from 'react-native';
import { render, screen } from '@testing-library/react-native';

import { ScreenContent } from '../src/components/ScreenContent';

describe('<ScreenContent />', () => {
  it('renders the title and path', async () => {
    await render(<ScreenContent title="Home" path="App.tsx" />);

    expect(screen.getByText('Home')).toBeOnTheScreen();
    expect(screen.getByText('App.tsx')).toBeOnTheScreen();
  });

  it('renders children', async () => {
    await render(
      <ScreenContent title="Home" path="App.tsx">
        <Text>Extra content</Text>
      </ScreenContent>
    );

    expect(screen.getByText('Extra content')).toBeOnTheScreen();
  });
});
