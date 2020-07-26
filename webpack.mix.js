const mix = require('laravel-mix');
const WatchTimePlugin = require('webpack-watch-time-plugin');

mix.webpackConfig({
  target: 'web',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            babelrc: false,
          }
        },
        {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json",
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        ]
      }, {
        test: /\.js?$/,
        use: [{
          loader: 'babel-loader',
          options: mix.config.babel()
        }]
      }, {
        test: /\.scss/,
        enforce: "pre",
        loader: 'import-glob-loader'
      }],
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
  },
  plugins: [
    new WatchTimePlugin()
  ]
});

mix.ts("./resources/ts/app.ts", "./public/js");
mix.sass('./resources/sass/app.scss', './public/css');
mix.copy("./resources/img/**/*", "./public/images/");
mix.browserSync({
  proxy: {
    target: "localhost",
    ws: true
  },
  files: [
    './public/css/*.css',
    './public/js/*.js',
    './app/**/*',
    './config/**/*',
    './resources/views/**/*.blade.php',
    './routes/**/*'
  ],
  https: false,
  host: "localhost",
  port: 3000
});

if (mix.inProduction()) {
  mix.version();
  mix.disableNotifications();
}
