var gulp = require('gulp');
var sass = require('gulp-sass');

var assets = 'assets/';
var assets_html = assets + 'html/*.html';
var assets_js = assets + 'js/*.js';
var assets_sass = assets + 'sass/*.scss';
var assets_views = assets + 'views/*.html';

var public = 'public/';
var public_assets = public + 'assets/';
var public_assets_js = public_assets + 'js';
var public_assets_css = public_assets + 'css';

// Default task
gulp.task('default', ['html', 'js', 'sass'], function() {
    console.log('Done');
});

// Copy HTML
gulp.task('html', function () {
    // Copy HTML
    gulp.src([
        assets_html
    ]).pipe(gulp.dest(public));
});

// Copy JavaScript
gulp.task('js', function () {
    return gulp.src([
        assets_js,
        'node_modules/jquery/dist/jquery.min.js'
    ]).pipe(gulp.dest(public_assets_js));
});

// Compile SASS to CSS
gulp.task('sass', function () {
    return gulp.src([
        assets_sass
    ]).pipe(sass().on('error', sass.logError)).pipe(gulp.dest(public_assets_css));
});

// Watch files for changes
gulp.task('watch', function () {
    gulp.watch(assets_html, ['html']);
    gulp.watch(assets_js, ['js']);
    gulp.watch(assets_sass, ['sass']);
});
