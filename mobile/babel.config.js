module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // Path alias support
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@store': './src/store',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
