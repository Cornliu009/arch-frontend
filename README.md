Arch-frontend
=====

Requirements
-----
* Vue2 for development <https://vuejs.org/>
* Git <http://git-scm.com/>

Project includes
-----
* Vue 2.6.* <https://vuejs.org/>
  * Vue-Router
  * Vuex
* TypeScript fully support <https://www.typescriptlang.org/docs/handbook/basic-types.html>
* Vue-Bootstrap 2.\*.* <https://bootstrap-vue.org/docs>
* ESLinter
* Support of new EcmaScript 2020
* Hot reloading
* node-sass plugin for scss/sass files
* vue-i18n support <https://kazupon.github.io/vue-i18n/>
* Vue-test-utils & Jest for Unit Testing


How to use
------


### Local development startup
    $ $ sudo npm install -g @vue/cli (if vue is not installed yet)
    $ git clone git@gitlab.com:arch-project/arch-frontend.git
    $ cd arch-frontend
    $ cp .env.dist .env
    $ yarn install
    $ yarn dev

Now http-server is available at <http://127.0.0.1:8080>
