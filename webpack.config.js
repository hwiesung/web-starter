const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports =  (env, argv)=>{
    console.log(argv.mode);
    return {
        entry: './src/index.js',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'bundle.js'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new CleanWebpackPlugin(['dist']),
            new CopyWebpackPlugin([
                {from: './src/index.html'},
                {from: './src/assets', to: './assets'},
            ]),
        ],
        devServer: {
            contentBase: './dist',
            port: 2200,
            historyApiFallback: true,
            hot: true
        }
    }

};