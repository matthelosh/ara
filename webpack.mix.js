const mix = require('laravel-mix');
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .webpackConfig({
        resolve: { fallback: { os: false }},
        // node: {
        //     fs: "empty"
        //   }
    })
    .js('resources/js/app.js', 'public/js').vue()
    .sass('resources/sass/styles/styles.scss', 'public/css')
    .alias({
        '@': path.join(__dirname, 'resources')
    })
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
