const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mergerules = require('postcss-merge-rules');
const mergelonghand = require('postcss-merge-longhand');

const plugins = [autoprefixer(), mergerules(), mergelonghand()];

gulp.task('build', () => {
    return gulp
        .src('./src/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([...plugins, cssnano()]))
        .pipe(gulp.dest('./build'));
});
gulp.task('non-mini', () => {
    return gulp
        .src('./src/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', () => {
    gulp.watch('./src/index.scss', gulp.parallel('non-mini'));
});

gulp.task('default', gulp.parallel('build'));
