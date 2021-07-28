const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const mergelonghand = require("postcss-merge-longhand");
const mergemedia = require("postcss-combine-media-query");
const singleline = require("postcss-single-line");
const rename = require("gulp-rename");
const nodemon = require("gulp-nodemon");
const run = require("gulp-run");

const plugins = [autoprefixer(), mergelonghand(), mergemedia()];

gulp.task("build", () => {
  return gulp
    .src("./src/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([...plugins, cssnano()]))
    .pipe(rename("molecule.min.css"))
    .pipe(gulp.dest("./build"));
});
gulp.task("non-mini", () => {
  return gulp
    .src("./src/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([...plugins, singleline()]))
    .pipe(rename("molecule.css"))
    .pipe(gulp.dest("./build"));
});
gulp.task("modules", () => {
  return gulp
    .src("./src/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([...plugins, singleline()]))
    .pipe(rename("molecule.module.css"))
    .pipe(gulp.dest("./build"));
});

gulp.task("globalStyles", () => {
  return gulp
    .src("./src/ComponentsStyle/globalStyles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([...plugins, singleline()]))
    .pipe(rename("global.css"))
    .pipe(gulp.dest("./build"));
});

gulp.task("colors", () => {
  return gulp
    .src("./src/colorutil.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([...plugins, singleline()]))
    .pipe(gulp.dest("./build"));
});

gulp.task("util", () => {
  return gulp
    .src("./src/utilitiesgenerate.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./build"));
});

gulp.task("generate-docs", () => {
  return run("node ./utils/CommentReader.js").exec();
});

gulp.task("watch", () => {
  gulp.watch("./src/**/*.scss", gulp.series("build", "non-mini"));
});

gulp.task(
  "default",
  gulp.series("build", "non-mini", "modules", "generate-docs", "globalStyles")
);
