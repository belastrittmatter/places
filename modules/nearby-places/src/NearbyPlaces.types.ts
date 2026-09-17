export interface NearbySearchOptions {
  latitude: number;
  longitude: number;
  radiusMeters?: number;
  query?: string;
  limit?: number;
}

export interface NearbyPlace {
  name: string;
  address?: string | null;
  latitude: number;
  longitude: number;
  category?: string | null;
  phoneNumber?: string | null;
  url?: string | null;
}
