var requirejsConfig = { // jshint ignore:line
  baseUrl: '/',
  paths: {
    'angular': [
      'lib/angular/angular'
    ],
    'angular-route': [
      'lib/angular-route/angular-route.min'
    ]
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    }
  }
};