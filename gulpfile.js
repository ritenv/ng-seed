/**
 * The awesome ASCII Art
 */
console.log(['',
"                                |",
",---.,---.   ,---.,---.,---.,---|",
"|   ||   |---`---.|---'|---'|   |",
"`   '`---|   `---'`---'`---'`---'",
"     `---'                       ",
''].join('\n'));

var path = require('path'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    stylish = require('jshint-stylish'),
    debug = false,
    WATCH_MODE = 'watch',
    RUN_MODE = 'run';

var mode = RUN_MODE;

function list(val) {
  return val.split(',');
}

gulp.task('js', function() {
  var jsTask;
  if (process.env.npm_config_production) {
    jsTask = gulp.src('src/ng/**/!(*-spec).js');
    if (!debug) {
      jsTask.pipe(uglify());
    }
  } else {
    jsTask = gulp.src('src/ng/**/*.js');
  }
  jsTask.pipe(gulp.dest('public/ng'))
    .pipe(connect.reload());
});

gulp.task('template', function() {
  var templateTask = gulp.src('src/template/**/*.html');
  if (!debug) {
    templateTask.pipe(htmlmin({ collapseWhitespace: true }));
  }
  templateTask.pipe(gulp.dest('public/template'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  var options = {
    errLogToConsole: true
  };
  if (!debug) {
    options.outputStyle = 'expanded';
    options.sourceComments = 'map';
  }
  var cssTask = gulp.src('src/sass/app.scss')
    .pipe(sass(options));
  if (!debug) {
    cssTask.pipe(minifyCSS());
  }
  cssTask.pipe(gulp.dest('public/css'))
    .pipe(connect.reload());
});

gulp.task('image', function () {
  gulp.src('src/image/**.*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/image'))
    .pipe(connect.reload());
});

gulp.task('lint', function() {
  gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

if (!process.env.npm_config_production) {
  var karma = require('gulp-karma'),
      protractor = require("gulp-protractor").protractor;

  gulp.task('karma', function(cb) {
    // undefined.js: unfortunately necessary for now
    //return 
    gulp.src(['undefined.js'])
      .pipe(karma({
        configFile: 'karma.conf.js',
        action: mode,
        reporters: ['progress', 'coverage'],
        coverageReporter: {
          type : 'html',
          dir : 'coverage/'
        },
        preprocessors: {
          'public/ng/**/!(*-spec|*-config|app|main).js': ['coverage']
        },
        browsers: ['PhantomJS']
      }))
      .on('error', function() {})
      .on('end', cb);
  });

  gulp.task('protractor', function(done) {
    gulp.src(["src/**/*-spec-ui.js"])
      .pipe(protractor({
        configFile: 'protractor.conf.js',
        args: [
          '--baseUrl', 'http://127.0.0.1:' + (process.env.PORT || 9999),
          '--browser', 'phantomjs'
        ]
      }))
      .on('end', function() {
        if (mode === RUN_MODE) {
          connect.serverClose();
        }
        done();
      })
      .on('error', function() {
        if (mode === RUN_MODE) {
          connect.serverClose();
        }
        done();
      });
  });
}

gulp.task('connect', function() {
  if (mode === WATCH_MODE) {
    gulp.watch(['index.html'], function() {
      gulp.src(['index.html'])
        .pipe(connect.reload());
    });
  }

  connect.server({
    livereload: mode === WATCH_MODE,
    port: (process.env.PORT || 9999)
  });
});

gulp.task('debug', function() {
  debug = true;
});

gulp.task('watch-mode', function() {
  mode = WATCH_MODE;

  var jsWatcher = gulp.watch('src/ng/**/*.js', ['js']),
    cssWatcher = gulp.watch('src/sass/**/*.scss', ['css', 'protractor']),
    imageWatcher = gulp.watch('src/image/**/*', ['image']),
    htmlWatcher = gulp.watch('src/template/**/*.html',
      ['template', 'protractor']),
    testWatcher = gulp.watch('src/**/*-spec*.js', ['karma', 'protractor']);

  function changeNotification(event) {
    console.log('File', event.path, 'was', event.type, ', running tasks...');
  }

  jsWatcher.on('change', changeNotification);
  cssWatcher.on('change', changeNotification);
  imageWatcher.on('change', changeNotification);
  htmlWatcher.on('change', changeNotification);
  testWatcher.on('change', changeNotification);
});

gulp.task('assets', ['css', 'js', 'lint', 'image', 'template']);
gulp.task('all', ['assets', 'karma', 'connect', 'protractor']);
gulp.task('build', ['assets', 'karma']);
gulp.task('default', ['watch-mode', 'all']);
gulp.task('serve', ['assets', 'connect']);
gulp.task('test', ['debug', 'connect', 'all']);
