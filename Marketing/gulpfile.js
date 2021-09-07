const gulp = require('gulp');
const del = require('del');
const browserSync = require('browser-sync').create();



var sass = require('gulp-sass')(require('sass'));



const tinypng = require('gulp-tinypng-compress');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const gcmq = require('gulp-group-css-media-queries');


function watch() {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });

  gulp.watch('./src/**/*.html', html);
  gulp.watch('./src/sass/**/*.scss', styles);
  gulp.watch('./src/js/main.js', scripts);
  gulp.watch('./src/img/**/*.*', images);
  gulp.watch('./src/vendor/**/*.*', vendor);
  gulp.watch('./src/fonst/*.woff2', fonts);
  gulp.watch('./src/images/**/*.{jpg,jpeg,png,webp,svg,gif}', {
    usePolling: true
  }, images);
}

function clean() {
  return del('./build/*');
}

function html() {
  return gulp.src('./src/**/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
}

function fonts() {
  return gulp.src('./src/fonts/*.woff2')
    .pipe(gulp.dest('./build/fonts/'))
    .pipe(browserSync.stream());
}

function images() {
  return gulp.src('./src/img/**/*.*')
    .pipe(tinypng({
      key: 'kDQcHvzsCsjCH02LjsCnYGGMkB1t2JGQ',
      sigFile: 'images/.tinypng-sigs',
      log: true
    }))
    .pipe(gulp.dest('./build/img'))
    .pipe(browserSync.stream());
}




function vendor(done) {
  gulp.src('./src/vendor/**/*.*')
    .pipe(gulp.dest('./build/vendor/'))
    .pipe(browserSync.stream());
  done();
}




function styles() {
  return gulp.src('./src/sass/main.scss')

    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))

    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(gcmq())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest('./build/js/'))
    .pipe(browserSync.stream());
}

let build = gulp.parallel(html, styles, scripts, images, vendor, fonts);
let buildWithClean = gulp.series(clean, build);
let dev = gulp.series(buildWithClean, watch);

gulp.task('build', buildWithClean);
gulp.task('dev', dev);