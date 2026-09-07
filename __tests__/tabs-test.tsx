import { render, screen } from '@testing-library/react-native';

import TabsLayout from '../src/app/(tabs)/_layout';
import Index from '../src/app/index';
import { DEFAULT_TAB, TABS } from '../src/config/tabs';

jest.mock('expo-router', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    Redirect: ({ href }: { href: string }) => <Text testID="redirect">{href}</Text>,
  };
});

jest.mock('expo-router/unstable-native-tabs', () => {
  const React = require('react');
  const { View, Text } = require('react-native');

  const Icon = () => <View />;
  const Label = ({ children }: { children: React.ReactNode }) => <Text>{children}</Text>;
  const Trigger = ({ name, children }: { name: string; children: React.ReactNode }) => (
    <View testID={`tab-trigger-${name}`}>{children}</View>
  );
  Trigger.Icon = Icon;
  Trigger.Label = Label;

  const NativeTabs = ({ children }: { children: React.ReactNode }) => (
    <View testID="native-tabs">{children}</View>
  );
  NativeTabs.Trigger = Trigger;

  return { NativeTabs };
});

describe('tabs', () => {
  it('redirects index to default tab route', async () => {
    expect(TABS.some((tab) => tab.name === DEFAULT_TAB)).toBe(true);

    await render(<Index />);

    expect(screen.getByTestId('redirect').props.children).toBe(`/(tabs)/${DEFAULT_TAB}`);
  });

  it('renders one trigger per configured tab', async () => {
    await render(<TabsLayout />);

    for (const tab of TABS) {
      expect(screen.getByTestId(`tab-trigger-${tab.name}`)).toBeOnTheScreen();
      expect(screen.getByText(tab.label)).toBeOnTheScreen();
    }
  });
});
