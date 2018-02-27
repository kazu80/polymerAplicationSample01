/* eslint-disable no-undef,comma-dangle,quotes,key-spacing */
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
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // オプションでCSS内のurl()メソッドの取り込みを禁止する
                            url: false,
                            // ソースマップを有効にする
                            sourceMap: true,
                            // Sassの場合は２を指定
                            importLoaders: 2
                        }
                    },
                    'sass-loader'
                ],
            }
        ]
    }
};
