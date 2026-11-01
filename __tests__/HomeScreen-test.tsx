import { Platform } from 'react-native';
import { render, screen } from '@testing-library/react-native';

import { HomeScreen } from '../src/components/HomeScreen';

jest.mock('expo-maps', () => {
  const React = require('react');
  const { View } = require('react-native');
  const AppleView = React.forwardRef((props: object, ref: object) => <View {...props} ref={ref} />);
  const GoogleView = React.forwardRef((props: object, ref: object) => (
    <View {...props} ref={ref} />
  ));
  return {
    AppleMaps: { View: AppleView },
    GoogleMaps: { View: GoogleView },
  };
});

jest.mock('@gorhom/bottom-sheet', () => {
  const { FlatList, View } = require('react-native');
  const BottomSheet = ({ children }: { children: object }) => <View>{children}</View>;
  return { __esModule: true, default: BottomSheet, BottomSheetFlatList: FlatList };
});

jest.mock('expo-location', () => ({
  requestForegroundPermissionsAsync: jest.fn().mockResolvedValue({ status: 'denied' }),
  getCurrentPositionAsync: jest.fn(),
}));

jest.mock('modules/nearby-places/src/NearbyPlacesModule', () => ({
  __esModule: true,
  default: { searchNearby: jest.fn().mockResolvedValue([]) },
}));

describe('<HomeScreen />', () => {
  it('renders the map container on iOS', async () => {
    jest.replaceProperty(Platform, 'OS', 'ios');

    await render(<HomeScreen />);

    expect(screen.getByTestId('home-map')).toBeOnTheScreen();
  });

  it('renders the map container on android', async () => {
    jest.replaceProperty(Platform, 'OS', 'android');

    await render(<HomeScreen />);

    expect(screen.getByTestId('home-map')).toBeOnTheScreen();
  });

  it('renders fallback text on web', async () => {
    jest.replaceProperty(Platform, 'OS', 'web');

    await render(<HomeScreen />);

    expect(screen.getByTestId('home-map')).toBeOnTheScreen();
    expect(screen.getByText('Maps are only available on Android and iOS')).toBeOnTheScreen();
  });
});
