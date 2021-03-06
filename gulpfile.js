var gulp = require('gulp'),
    connect = require('gulp-connect-multi')();

//使用connect启动一个Web服务器
gulp.task('connect', connect.server({
    root: ['src'],
    port: 14,
    livereload: true,
    open: {
        file: 'index.html',
        browser: 'chrome' // if not working OS X browser: 'Google Chrome'
    }
}));
