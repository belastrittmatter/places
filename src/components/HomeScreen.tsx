import { Platform, Text, View } from 'react-native';
import { AppleMaps, GoogleMaps } from 'expo-maps';
import NearbyPlacesBottomSheet from '@/components/NearbyPlacesBottomSheet';

interface HomeScreenProps {
  latitude?: number;
  longitude?: number;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  latitude = 37.78825,
  longitude = -122.4324,
}) => {
  if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
    return (
      <View className="flex-1 items-center justify-center" testID="home-map">
        <Text>Maps are only available on Android and iOS</Text>
      </View>
    );
  }

  const coordinates = { latitude, longitude };

  return (
    <View className="flex-1" testID="home-map">
      {Platform.OS === 'ios' ? (
        <AppleMaps.View
          style={{ flex: 1 }}
          cameraPosition={{ coordinates, zoom: 12 }}
          markers={[{ coordinates, title: 'Center' }]}
          properties={{ isMyLocationEnabled: true }}
          uiSettings={{ myLocationButtonEnabled: true }}
        />
      ) : (
        <GoogleMaps.View
          style={{ flex: 1 }}
          cameraPosition={{ coordinates, zoom: 12 }}
          markers={[{ coordinates, title: 'Center' }]}
          properties={{ isMyLocationEnabled: true }}
          uiSettings={{ myLocationButtonEnabled: true }}
        />
      )}
      <NearbyPlacesBottomSheet />
    </View>
  );
};
