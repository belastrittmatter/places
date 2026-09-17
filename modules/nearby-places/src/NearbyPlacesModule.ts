import { NativeModule, requireNativeModule } from 'expo';

import type { NearbyPlace, NearbySearchOptions } from './NearbyPlaces.types';

declare class NearbyPlacesModule extends NativeModule<{}> {
  searchNearby(options: NearbySearchOptions): Promise<NearbyPlace[]>;
}

export default requireNativeModule<NearbyPlacesModule>('NearbyPlaces');
