import { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { AppleMaps, GoogleMaps } from 'expo-maps';
import * as Location from 'expo-location';
import NearbyPlacesBottomSheet from '@/components/NearbyPlacesBottomSheet';

interface HomeScreenProps {
  latitude?: number;
  longitude?: number;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  latitude = 37.78825,
  longitude = -122.4324,
}) => {
  const [coordinates, setCoordinates] = useState({ latitude, longitude });

  useEffect(() => {
    Location.requestForegroundPermissionsAsync().then(({ status }) => {
      if (status !== 'granted') return;
      Location.getCurrentPositionAsync({}).then(({ coords }) =>
        setCoordinates({ latitude: coords.latitude, longitude: coords.longitude })
      );
    });
  }, []);

  if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
    return (
      <View className="flex-1 items-center justify-center" testID="home-map">
        <Text>Maps are only available on Android and iOS</Text>
      </View>
    );
  }

  const { latitude: lat, longitude: lng } = coordinates;

  return (
    <View className="flex-1" testID="home-map">
      {Platform.OS === 'ios' ? (
        <AppleMaps.View
          style={{ flex: 1 }}
          cameraPosition={{ coordinates, zoom: 12 }}
          properties={{ isMyLocationEnabled: true }}
          uiSettings={{ myLocationButtonEnabled: true }}
        />
      ) : (
        <GoogleMaps.View
          style={{ flex: 1 }}
          cameraPosition={{ coordinates, zoom: 12 }}
          properties={{ isMyLocationEnabled: true }}
          uiSettings={{ myLocationButtonEnabled: true }}
        />
      )}
      <NearbyPlacesBottomSheet latitude={lat} longitude={lng} />
    </View>
  );
};
