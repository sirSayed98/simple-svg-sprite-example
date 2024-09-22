const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')


const { SimpleSVGSprite, GenerateSVGContentHash } = require('simple-svg-sprite')
const svgContentHash = GenerateSVGContentHash('./src/svg-icons/')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Minimal Vue Webpack',
      template: 'src/templates/index.html',
    }),
    new VueLoaderPlugin(),
    new SimpleSVGSprite({
      svgFolderPath: './src/svg-icons/',
      spriteOutput: `spritemap.${svgContentHash}.svg`,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },

      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },

      {
        test: /\.png$/,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(js|html)$/,
        exclude: [/node_modules/],
        use: {
          loader: path.resolve(__dirname, './custom-loaders/EditSvgHrefLoader'),
          options: {
            svgFileName: `spritemap.${svgContentHash}.svg`,
            prefix: 'shape-',
          },
        },
      },
    ],
  },
}
