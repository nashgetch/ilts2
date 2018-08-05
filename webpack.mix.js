//mix = require('laravel-elixir').mix;
//mix = require('johnny-five').mix;
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/assets/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');
// mix.scripts([
//     '../../../node_modules/johnny-five/lib/johnny-five.min.js'
// ], 'public/assets/js/app.js', './');
let mix = require('laravel-mix');
mix.scripts([
    'ap.js'
], 'public/js/main.js');