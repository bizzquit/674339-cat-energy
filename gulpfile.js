"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var htmlmin = require('gulp-htmlmin');
var jsmin = require('gulp-jsmin');
var del = require("del");
var server = require("browser-sync").create();

/*!!!сделал*/
gulp.task("webp", function () {
    return gulp.src("source/img/**/*.{png,jpg}")
        .pipe(webp({quality: 90}))
        .pipe(gulp.dest("source/img"));
});

/*!!!сделал*/
gulp.task("images", function () {
    return gulp.src("source/img/**/*.{png,jpg,svg}")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.jpegtran({progressive: true}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest("source/img"));

});

gulp.task("jsmin", function () {
    return gulp.src("source/js/*.js")
        .pipe(jsmin())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("build/js"));
});

gulp.task("sprite", function () {
    return gulp.src("source/img/sprite/*.svg")
        .pipe(
            svgstore({
                inlineSvg: true
            })
        )
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
    return gulp.src("source/*.html")
        .pipe(posthtml([include()]))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("build"));
});

gulp.task("copy", function () {
    return gulp.src([
        "source/fonts/**/*.{woff,woff2}",
        "source/img/*.*"
    ], {
        base: "source"
    })
        .pipe(gulp.dest("build"));
});

gulp.task("delete", function () {
    return del("build");
});

gulp.task("refresh", function (done) {
    server.reload();
    done();
});

gulp.task("css", function () {
    return gulp.src("source/sass/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(csso())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task("server", function () {
    server.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
    gulp.watch("source/img/**/sprite-*.svg", gulp.series("sprite", "html", "refresh"));
    gulp.watch("source/js/*.js", gulp.series("jsmin", "refresh"));
    gulp.watch("source/*.html", gulp.series("html", "refresh"));
    /*gulp.watch("source/!*.html").on("change", "refresh");*/
});

gulp.task("build", gulp.series("delete", "copy", "css", "jsmin", "sprite", "html"));

gulp.task("start", gulp.series("build", "server"));
