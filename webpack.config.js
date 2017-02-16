// @flow weak

const path = require('path');

const libraryName = 'material-ui';
const outputFile = `${libraryName}.min.js`;
const INDEX = path.join(__dirname, 'src/index.js');
const DIST = path.join(__dirname, 'dist');

const config = {
  entry: {
    'material-ui': INDEX,
  },
  devtool: 'source-map',
  output: {
    path: DIST,
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: [
    'react-addons-create-fragment',
    'react-addons-transition-group',
    {
      react: {
        root: 'React',
        commonjs2: './react',
        commonjs: ['./react'],
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: './react-dom',
        commonjs: ['./react-dom'],
        amd: 'react-dom',
      },
    },
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
};

module.exports = config;
