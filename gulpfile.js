var gulp = require('gulp')
var babel = require('gulp-babel')
var mocha = require('gulp-mocha')
var jshint = require('gulp-jshint')
var filter = require('gulp-filter')
require('babel/register')

var sourceFiles = 'src/**/*.js',
    testFiles = 'test/**/*.js',
    allFiles = './javascript/**/*.js'

gulp.task('test', function() {
  var testFilter = filter(testFiles)
  return gulp.src(allFiles)
    // ALL
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(babel())
    // TEST
    .pipe(testFilter)
    .pipe(mocha())
    //.pipe(testFilter.restore())
})

gulp.task('test-watch', ['test'], function() {
  gulp.watch(allFiles, ['test'])
})

gulp.task('default', ['test-watch'])
