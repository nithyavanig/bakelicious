
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebPackPlugin from "html-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const webPackConfiguration = (env) => {
  const devMode = env!== 'production';

  return {
    entry: {
      index: path.resolve(__dirname, 'src', 'index.js')
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    devServer:{
      hot: true,
      static: './dist'
    },
    output:{
      path: path.resolve(__dirname, 'public', 'build')
    },
    module: { 
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [htmlPlugin]
  }
};

export default webPackConfiguration;