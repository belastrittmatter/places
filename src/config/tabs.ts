export const TABS = [
  { name: 'home', label: 'Home', sf: 'house', md: 'home' },
  { name: 'lists', label: 'Lists', sf: 'list.bullet.clipboard', md: 'home' },
  { name: 'map', label: 'Map', sf: 'map', md: 'map' },
  { name: 'profile', label: 'Profile', sf: 'person', md: 'person' },
] as const;

export type TabName = (typeof TABS)[number]['name'];

export const DEFAULT_TAB: TabName = 'map';
