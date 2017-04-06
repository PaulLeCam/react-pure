import path from 'path';
import webpack from 'webpack';

const outputPath = path.resolve(__dirname, 'dist');

const config = {
  entry: {
    lib: './src/index',
  },
  externals: [
    {
      react: {
        amd: 'react',
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React',
      },
    },
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              {
                loose: true,
                modules: false,
                targets: ['last 2 versions', 'ie >= 9'],
              },
            ],
            'react',
            'stage-1',
          ],
        },
      },
    ],
  },
};

export default [
  {
    ...config,
    output: {
      filename: 'react-pure.js',
      library: 'ReactPure',
      libraryTarget: 'umd',
      path: outputPath,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  },
  {
    ...config,
    output: {
      filename: 'react-pure.min.js',
      library: 'ReactPure',
      libraryTarget: 'umd',
      path: outputPath,
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          dead_code: true,
          warnings: false,
        },
      }),
    ],
  },
];
