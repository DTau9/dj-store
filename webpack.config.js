const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const miniSVGDataURI = require('mini-svg-data-uri');

let mode = "development";
let target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/template.html'),
    filename: 'index.html',
    inject: 'body'
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: '',
    assetModuleFilename: "images/[hash][ext][query]"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/i,
        type: "asset/inline",
        generator: {
          dataUrl(content) {
            content = content.toString();
            return miniSVGDataURI(content);
          }
        },
        use: "svgo-loader"
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' }
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        type: "asset",
        use: [
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              minimizerOptions: {
                plugins: [
                  ["mozjpeg", {
                    progressive: true,
                    quality: 100
                  }]
                ],
              },
            }
          }
        ]
      },
    ],
  },

  plugins: plugins,

  target: target,

  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    // historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    hot: true,
  },

  experiments: {
    topLevelAwait: true,
  }
};
