import { registerWebModule, NativeModule } from 'expo';

// NearbyPlacesModule is not available on the web platform.
class NearbyPlacesModule extends NativeModule<{}> {}

export default registerWebModule(NearbyPlacesModule, 'NearbyPlacesModule');
