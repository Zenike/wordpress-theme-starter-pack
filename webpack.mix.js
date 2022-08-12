// you are in the webpack.mix.js file

// Init Laravel Mix
let mix = require('laravel-mix');

// Compile the JS. Each file in the array [... ,...] will be compiled into the outpout file (last argument in the line)
mix.js(['assets/js/config.js', 'node_modules/startpack/startpack.js', 'node_modules/sliker/sliker.js', 'assets/js/script.js'], 'assets/js/app.js');

// Compile the less. The less "include" system is managed in style.less since it's not relative to the compiler but a css native function
mix.less('assets/less/style.less', 'assets/css/style.css').options({
    // Disable this option or Laravel Mix will move our fonts and images files in new directories
    processCssUrls: false
});
