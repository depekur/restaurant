var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
  return gulp.src('sass/style.scss')
    .pipe(sass({ outputStyle: 'compressed', includePaths : ['sass/**/'] }))
    .on('error', sass.logError)
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({ stream: true }))

});



gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
  })
});



gulp.task('default', ['browserSync', 'sass'], function(){
  gulp.watch('sass/**/*.scss', ['sass']); 
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('js/**/*.js', browserSync.reload); 

})