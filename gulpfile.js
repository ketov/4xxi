var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var build = require('gulp-build');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');

/*gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');
 
    return gulp.src('app/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/css/autoprefixer'));
});*/

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('app/css'));
});

gulp.task('autoprefixer', function () {
    return gulp.src('app/css/main.css')
            .pipe(autoprefixer())
            .pipe(gulp.dest('app/css/autoprefixer'));
});

gulp.task('jade', function () {
    return gulp.src('app/jade/**/*.jade')
            .pipe(jade())
            .pipe(gulp.dest('app'));
});

gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/jade/**/*.jade', ['jade']);
});

gulp.task('clean', function () {
    return gulp.src('dist')
            .pipe(clean());
});

gulp.task('scripts', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js'
    ])
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('app/js'));
});


gulp.task('build', ['clean'], function () {
    gulp.src(['app/css/autoprefixer/main.css', 'app/css/font-awesome.min.css'])
            .pipe(build())
            .pipe(gulp.dest('dist/css'));
    
    gulp.src('app/js/**/*.js')
            .pipe(build())
            .pipe(gulp.dest('dist/js'));

    gulp.src('app/**/*.html')
            .pipe(build())
            .pipe(gulp.dest('dist'));

    gulp.src('app/images/**/*')
            .pipe(gulp.dest('dist/images'));
    //gulp.src('app/images/**/*.png')
    //        .pipe(build())
    //        .pipe(gulp.dest('dist/images'));
});