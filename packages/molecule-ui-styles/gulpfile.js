const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mergelonghand = require('postcss-merge-longhand');
const mergemedia = require('postcss-combine-media-query');
const singleline = require('postcss-single-line');

const plugins = [autoprefixer(), mergelonghand(), mergemedia()];

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
        .pipe(postcss([...plugins, singleline()]))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', () => {
    gulp.watch('./src/*.scss', gulp.parallel('non-mini'));
});

gulp.task('default', gulp.parallel('build'));
