// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {build as config}  from '../../config';

const $ = gulpLoadPlugins();

gulp.task('build:production', [], () => {

  browserSync.notify('Building Production');

  return gulp.src(config.production.src)
    .pipe($.size({title: 'build', gzip: true}));
});

gulp.task('build:production:sequence', (cb) => {

  browserSync.notify('Building Production');

  $.sequence('html:production', 'images:production', 'fonts:production', 'extras:production', 'build:production', 'rev-hash:sequence', cb);
});
