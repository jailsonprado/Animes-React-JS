const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                happyPackMode: true,
                configFile: path.resolve(__dirname, 'tsconfig.json'),
              },
            }
          ],
    },]
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        tslint: false,      // change to 'true' later
        useTypescriptIncrementalApi: true,
        checkSyntacticErrors: true,
      }),
    ]
}
