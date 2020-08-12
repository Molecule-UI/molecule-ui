const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const plugins = [autoprefixer(), cssnano()];

gulp.task('sass-icons', () => {
    return gulp
        .src('./src/icon-styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./build/'));
});

gulp.task('sass-components', () => {
    return gulp
        .src('./src/component-styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', gulp.parallel('sass-components', 'sass-icons'));
