'use strict';

let gulp = require('gulp');
let spawn = require('child_process').spawn;
let nodemon = require('gulp-nodemon');

gulp.task('default', ['start-watch-build'], function () {
});

gulp.task('start-watch-build', ['nodemon'], function () {
    gulp.watch('./src/**/*.*', ['build-development']);
});

gulp.task('nodemon', function (cb) {
    let started = false;
    return nodemon({ script: 'server.js' }).on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('build-development', function () {
    spawn('yarn run build-development', [], { shell: true, stdio: 'inherit' });
});
