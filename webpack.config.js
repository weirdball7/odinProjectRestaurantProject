const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Output filename
    },
    plugins: [
        new htmlWebpackPlugin({
            tenplate: './src/index.html',   
            filename: 'index.html',
            inject: 'body',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader', // Inject styles into DOM
                    'css-loader' // Translate CSS into CommonJS
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
            //   {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset/resource',
            //   },
              {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
              },
              {
                test: /\.xml$/i,
                use: ['xml-loader'],
              },
        ]
    }

};
