                                    |
    ,---.,---.   ,---.,---.,---.,---|
    |   ||   |---`---.|---'|---'|   |
    `   '`---|   `---'`---'`---'`---'
         `---'                       
     

#### About

![superman-logo](https://raw.githubusercontent.com/ritenv/ng-seed/master/content/superman-logo.jpg) <br>*ng-seed is a super-heroic AngularJS seed base. It is scaffolded with an awesome stack of tools that kickstart the dev process, and keep the journey pleasant. The power of `SASS`, benefits of `gulp`, flexibility of `mocha`,  pros of `RequireJS` and known utility of `AngularJS` makes this a complete seed for scalable, standard application architecture.*

#### ng-seed includes:
* **Application**
    * [RequireJS](http://requirejs.org/) - Dependency Injections for JavaScript
    * [Sass](http://sass-lang.com/) - CSS extension language
    * [Bourbon](http://bourbon.io/) - Mixin library for Sass
    * [Neat](http://neat.bourbon.io/) - Grid framework for Sass and Bourbon
    * [Bitters](http://bitters.bourbon.io/) - Scaffold styles for Bourbon projects
    * [Refills](http://refills.bourbon.io/) - Prepackaged patterns built on top of Bourbon
    * [Bower](http://bower.io/) - Front-end package manager
    * [Gulp](http://gulpjs.com/) - Streaming build system
* **Testing**
    * [angular-mocks](https://github.com/angular/bower-angular-mocks/) - Mocks for AngularJS
    * [Karma](http://karma-runner.github.io/) - JavaScript unit test runner
    * [Mocha](http://mochajs.org/) - Testing framework
    * [Chai](http://chaijs.com/) - Super-flexible assertion library
    * [Protractor](https://github.com/angular/protractor/) - End-to-end test runner
    * [Istanbul](http://gotwarlost.github.io/istanbul/) - Coverage report generator

#### Instructions:

**Getting started**
* Install bower using ```sudo npm install bower -g```.
* Install gulp using ```sudo npm install gulp -g```.
* Run: ```npm start```.
* Install Java from here, if prompted: <a target="_blank" href="http://support.apple.com/kb/DL1572">http://support.apple.com/kb/DL1572</a> (to run `Selenium`)

The app consists of `prestart` and `postinstall` scripts that will ensure installation of `npm` dependencies and `bower` components. No need to install manually.

**Other commands**
* Run ```gulp``` to compile, minify, lint and test front-end assets.
* Run ```gulp debug default``` while you are developing so that you can use the unminified version of your assets.
* Run ```gulp server``` or ```gulp debug server``` if you want the default task run and your files served by a development HTTP server (includes livereload)
* Run ```gulp test``` to execute a single run of tests.

