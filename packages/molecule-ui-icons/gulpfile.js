const gulp = require("gulp");
const ts = require("gulp-typescript");
const glob = require("glob");
const uglify = require("gulp-uglify");
const sources = [];

glob.sync("./src/*.tsx").forEach((filePath) => {
  sources.push(filePath);
});

sources.push("./src/helpers.ts");

gulp.task("compile tsx", () => {
  const tsProject = ts.createProject("./tsconfig.json");
  return gulp.src(sources).pipe(tsProject()).pipe(gulp.dest("build"));
});

gulp.task("watch", () => {
  gulp.watch(sources, gulp.series("compile tsx"));
});

gulp.task("default", gulp.parallel("compile tsx"));
