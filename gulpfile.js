var gulp = require("gulp");
var uglify = require("gulp-uglify");

//style
gulp.task("style", function () {
  console.log("dddddddddddddd");
});

//script
gulp.task("script", function () {
  console.log("script");
  return gulp.src("./assets/js/*.js").pipe(uglify()).pipe(gulp.dest("./dest"));
});

//default
gulp.task("default", function () {
  console.log("starttttttt");
});
