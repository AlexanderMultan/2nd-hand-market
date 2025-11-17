const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = (env) => {
    const isDev = env.mode === "development";
    const isProduction = env.mode === "production";

    return {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, 'src', 'index.jsx'),
        output: {
            path: path.resolve(__dirname, 'build'), // Изменил build на dist
            filename: '[name].[hash].js',
            clean: true,
            publicPath: isProduction ? '/2nd-hand-market/' : '/',
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                ['@babel/preset-react', {
                                    runtime: 'automatic'
                                }]
                            ]
                        }
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/fonts/[name][ext]'
                    }
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name][ext]'
                    }
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),
                ...(isProduction && {
                    templateParameters: {
                        baseHref: '/2nd-hand-market/'
                    }
                })
            }),
            new webpack.ProgressPlugin()
        ],
        devtool: isDev ? "inline-source-map" : false,
        devServer: isDev ? {
            port: env.port ?? 3000,
            open: true,
            historyApiFallback: true,
        } : undefined,
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '@': path.resolve(__dirname, 'src', 'components'),
            }
        }
    }
};