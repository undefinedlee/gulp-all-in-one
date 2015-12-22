var gulp = require('gulp');
var allInOne = require("./index");

gulp.task('default',function(){
    gulp.src("test/src/index.js")
	    .pipe(allInOne("xxx"))
	    .pipe(gulp.dest("test/dist"));
});