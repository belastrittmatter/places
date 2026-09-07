import { NativeTabs } from 'expo-router/unstable-native-tabs';

import { TABS } from '@/config/tabs';

export default function TabsLayout() {
  return (
    <NativeTabs minimizeBehavior="onScrollDown">
      {TABS.map((tab) => (
        <NativeTabs.Trigger key={tab.name} name={tab.name}>
          <NativeTabs.Trigger.Icon sf={tab.sf} md={tab.md} />
          <NativeTabs.Trigger.Label>{tab.label}</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      ))}
    </NativeTabs>
  );
}
