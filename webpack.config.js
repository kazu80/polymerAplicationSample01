/* eslint-disable no-undef,comma-dangle,quotes,key-spacing */

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // モード値をproductionに設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',
    // mode: "production",

    // メインとなるJavascriptファイル
    entry: "./src/static/js/index.js",

    // ファイル出力設定
    output: {
        // 出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,

        // 出力ファイル名
        filename: 'main.js'
    },

    module: {
        // Loaderの設定
        rules : [
            // Sassファイルの読み込みとコンパイル
            {
                test: /\.scss/, // 対象となるファイルの拡張子
                use: ExtractTextPlugin.extract({
                                                   fallback: 'style-loader',
                                                   use: ['css-loader', 'sass-loader']
                                               })
            },
            {
                // 対象となるファイルの拡張子
                test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
                // 画像をBase64として取り込む
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(`style.css`)
    ]
};
