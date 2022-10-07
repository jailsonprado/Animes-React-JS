 module: {
    loaders: [
        {
            test: /\.(js|jsx)?$/,
            loader: "babel-loader",
            exclude: /node_modules/
        },
        {
            test: /\.(ts|tsx)?$/,
            loader: "awesome-typescript-loader",
            exclude: /node_modules/
        },
        {
            use: {
              loader: 'awesome-typescript-loader'
            },
            exclude: /node_modules/
         },
        
        {
            test: /\.json$/,
            exclude: /node_modules/,
            loader: 'json-loader'
        }
    ]
}
resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".less"]
}