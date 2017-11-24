var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('sass', function(){
  gulp.src('./sass/**/*.scss')
  .pipe(sass({outputStyle: 'compact'}))
  .pipe(gulp.dest('./css/'));
});

//コマンドラインから叩くタスク ```gulp svr```
gulp.task('svr', ['sass'], function(){
  //sassを監視するウォッチャを生成
  var watcher = gulp.watch('./sass/*.scss', ['sass']);
  watcher.on('change', function(event) {
  });
  
  //webserver起動
  gulp.src('./').pipe(webserver({
    host: 'localhost',
    port: 8888,
    livereload: true
  }));
});
