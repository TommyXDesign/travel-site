var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function(){
       browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });

    watch('./app/assets/scripts/**/*.js', function(){
        gulp.start('scriptsRefrash');
    });
});

gulp.task('cssInject', ['styles'] , function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefrash', ['scripts'], function(){
    browserSync.reload();
});