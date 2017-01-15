'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _fastclick = require('fastclick');

var _fastclick2 = _interopRequireDefault(_fastclick);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _Actionsheet = require('./components/demo/Actionsheet');

var _Actionsheet2 = _interopRequireDefault(_Actionsheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default); // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

var routes = [{
  path: '/',
  component: _Actionsheet2.default
}];

var router = new _vueRouter2.default({
  routes: routes
});

_fastclick2.default.attach(document.body);

/* eslint-disable no-new */
new _vue2.default({
  router: router,
  render: function render(h) {
    return h(_App2.default);
  }
}).$mount('#app');

//# sourceMappingURL=main-compiled.js.map