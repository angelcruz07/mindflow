module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        [
            'module-resolver',
            {
            root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
            alias: {
               '@components': './src/components/index.ts',
                '@constants': './src/constants/index.ts',
                '@images': './public/img/',
                '@data': './src/data/'
            }
            }
        ]
    ]
  };
};
