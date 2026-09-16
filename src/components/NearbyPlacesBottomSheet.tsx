import { Text } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
const NearbyPlacesBottomSheet = () => {
  return (
    <BottomSheet snapPoints={['17%', '45%', '92%']} style={{ flex: 1 }}>
      <BottomSheetView style={{ flex: 1, paddingBottom: 95 }}>
        <Text className="m-0 ml-8 p-0 text-2xl font-semibold">Nearby</Text>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default NearbyPlacesBottomSheet;
