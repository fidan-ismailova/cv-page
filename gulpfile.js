const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');

// Load plugins

const browsersync = require('browser-sync').create();
const clean = require('gulp-clean');
const changed = require('gulp-changed');
const cssnano = require('gulp-cssnano');
const uglify = require("gulp-uglify-es").default;
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');



function clear() {
    return src('./build/*', {
        read: false
    })
        .pipe(clean());
}

// CSS 

function css() {
    const source = './src/css/*';

    return src(source)
        .pipe(changed(source))
        .pipe(cssnano())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest('./build/css/'))
        .pipe(browsersync.stream());
}

// javascript

function js() {
    const source = './src/js/*';

    return src(source)
        .pipe(changed(source))
        .pipe(uglify())
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        .pipe(dest('./build/js/'))
        .pipe(browsersync.stream());
}

// Optimize images

function img() {
    return src('./src/images/*')
        .pipe(imagemin())
        .pipe(dest('./build/images'));
}

// html

function html() {
    return src('./src/*.html')
        .pipe(dest('./build/'))
        .pipe(browsersync.stream());
}

// Watch files

function watchFiles() {
    watch('./src/css/*', css);
    watch('./src/js/*', js);
    watch('./src/*.html', html);
    watch('./src/images/*', img);
}

// BrowserSync

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './build'
        },
        port: 3000
    });
}

exports.watch = parallel(watchFiles, browserSync);
exports.default = series(clear, parallel(html, js, css, img));