export default ({ config }) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  return {
    ...config,
    android: {
      ...config.android,
      ...(apiKey ? { config: { googleMaps: { apiKey } } } : {}),
    },
  };
};
