import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import NearbyPlacesModule from 'modules/nearby-places/src/NearbyPlacesModule';
import type { NearbyPlace } from 'modules/nearby-places/src/NearbyPlaces.types';

interface NearbyPlacesBottomSheetProps {
  latitude: number;
  longitude: number;
}

const NearbyPlacesBottomSheet: React.FC<NearbyPlacesBottomSheetProps> = ({
  latitude,
  longitude,
}) => {
  const [places, setPlaces] = useState<NearbyPlace[]>([]);

  useEffect(() => {
    let active = true;
    NearbyPlacesModule.searchNearby({
      latitude,
      longitude,
      radiusMeters: 2000,
      limit: 20,
    }).then((results) => {
      if (active) setPlaces(results);
    });
    return () => {
      active = false;
    };
  }, [latitude, longitude]);

  return (
    <BottomSheet snapPoints={['17%', '45%', '92%']}>
      <Text className="mx-8 mb-2 mt-2 text-2xl font-semibold">Nearby · {places.length}</Text>
      <BottomSheetFlatList
        contentContainerStyle={{ paddingBottom: 95 }}
        data={places}
        keyExtractor={(item) => `${item.name}-${item.latitude}-${item.longitude}`}
        renderItem={({ item }) => (
          <View className="mx-4 mb-2 rounded-xl bg-gray-50 px-4 py-3">
            {item.category ? (
              <Text className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                {item.category.replace('MKPOICategory', '').toLowerCase()}
              </Text>
            ) : null}
            <Text className="text-base font-medium">{item.name}</Text>
            {item.address ? <Text className="text-sm text-gray-500">{item.address}</Text> : null}
          </View>
        )}
      />
    </BottomSheet>
  );
};

export default NearbyPlacesBottomSheet;
