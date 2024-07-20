module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@types': './src/types',
          '@navigators': './src/navigators',
          '@state': './src/state',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@locale': './src/locale',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
