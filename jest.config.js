/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-expo',
  testTimeout: process.env.CI ? 30_000 : 5_000,
  slowTestThreshold: 3,
  resolver: '<rootDir>/node_modules/react-native-worklets/jest/resolver.js',
  modulePaths: ['<rootDir>'],
  testMatch: ['**/*-test.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(.bun|(jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|expo-router|@sentry/react-native|native-base|react-native-svg))',
  ],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/*-test.{ts,tsx}', '!**/*.d.ts'],
};
