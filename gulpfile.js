// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = './src/assets/scss/**/*.scss',
    cssDest = './src/assets/css/';

gulp.task('styles', done => {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));

        done();
});

gulp.task('watch', function(){
    gulp.watch(sassFiles, gulp.series('styles'));
});