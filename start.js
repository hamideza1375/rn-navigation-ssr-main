require('ignore-styles')

require('@babel/register')({
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      "root": ['.'],
      "alias": {
        '@react-native-community/netinfo': './src/other/utils/netInfo.js',
      },
      "root": ['.'],
    }],
  ],
})

require('./server')



// ['module:react-native-dotenv'], 'react-native-reanimated/plugin']



// require('ignore-styles')

// require('@babel/register')({
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     ['react-native-web', { 'commonjs': false }],
//     ['babel-plugin-transform-typescript-metadata'],
//     ['@loadable/babel-plugin'],
//     ["@babel/plugin-proposal-decorators", { "legacy": true }],
//     ["module-resolver", {
//       "root": ['.'],
//       "alias": {
//         '@react-native-community/netinfo': './src/other/utils/netInfo.js',
//         'react-native': 'react-native-web',
//       },
      
//       "root": ['.'],
//     }],
//     ["transform-imports", {
//       "react-native": {
//         "transform": "react-native-web",
//         "preventFullImport": true
//       }
//     }]
//   ],
// })

// require('./server')
// // ['@loadable/babel-plugin'],

// // plugins: [
// //   "@babel/plugin-transform-flow-strip-types",
// //   "babel-plugin-transform-typescript-metadata",
// //   ["@babel/plugin-proposal-decorators", { "legacy": true }],
// //   ["@babel/plugin-proposal-class-properties"],
// // ]

// // "babel-plugin-transform-typescript-metadata",
// // ["@babel/plugin-proposal-decorators", { "legacy": true }]