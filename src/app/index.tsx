import { Redirect } from 'expo-router';

import { DEFAULT_TAB } from '@/config/tabs';

export default function Index() {
  return <Redirect href={`/(tabs)/${DEFAULT_TAB}`} />;
}
