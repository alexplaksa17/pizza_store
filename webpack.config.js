module.exports = {
    entry: "./app/app.jsx", 
    output:{
        path:  __dirname + "/public",     
        filename: "bundle.js"       
    },
    watch: true,
    watchOptions:{
      aggregateTimeout:300
    },
    resolve:{
        extensions: ["*", ".js", ".jsx"] 
    },
    module:{
        loaders:[   
            {
                test: /\.jsx?$/, 
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query:{
                    presets:["es2015", "react"]
                }
            }
        ]
    }
}
