module.exports = {
    entry: "./app/app.jsx", // входная точка - исходный файл
    output:{
        path:  __dirname + "/public",     // путь к каталогу выходных файлов
        filename: "bundle.js"       // название создаваемого файла
    },
    watch: true,
    watchOptions:{
      aggregateTimeout:300
    },
    resolve:{
        extensions: ["*", ".js", ".jsx"] // расширения для загрузки модулей
    },
    module:{
        loaders:[   //загрузчики
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query:{
                    presets:["es2015", "react"]
                }
            }
        ]
    }
}
