const {src ,dest ,series,parallel,watch} =require("gulp");

// -----html----
const htmlMin=require("gulp-htmlmin");
function htmltask() {
  return src("src/*.html").pipe(htmlMin({collapseWhitespace:true,removeComments:true}))
  .pipe(dest("build"))  
}
// exports.default=htmltask
//---------imgs---------------

const imgMin=require("gulp-imagemin");
function imgMinify() {
return src("src/Images/*").pipe(imgMin())
.pipe(dest("build/Images"))    
}
// exports.img = imgMinify

// ---------------css------------
const cssmin=require("gulp-clean-css");
const concat = require("gulp-concat");
function cssMinify() {
return src("src/Css/**/*.css").pipe(concat("style.min.css"))
.pipe(cssmin()).pipe(dest("build/Css"))    
}
function watchTask() {
    watch(["src/Css/**/*.css","src/*.html","src/Js/*.js"],{interval:1000}, parallel(cssMinify,htmltask))
}
//----------------js----------------------
const minJs=require("gulp-terser")
function jsMinify() {
    return src("src/Js/*.js").pipe(concat("script.min.js"))
    .pipe(minJs())
    .pipe(dest("build/Js"))
}


exports.default=series(parallel(cssMinify,imgMinify,htmltask,jsMinify),watchTask)

