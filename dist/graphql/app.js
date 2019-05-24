"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _koa = _interopRequireDefault(require("koa"));

var _koaGraphql = _interopRequireDefault(require("koa-graphql"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _cors = _interopRequireDefault(require("@koa/cors"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _schema = require("./schema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

var app = new _koa["default"]();
var router = new _koaRouter["default"]();

var graphqlSettingsPerReq =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              graphiql: process.env.NODE_ENV !== 'production',
              schema: _schema.schema,
              formatError: function formatError(error) {
                console.log(error.message);
                console.log(error.locations);
                console.log(error.stack);
                return {
                  message: error.message,
                  locations: error.locations,
                  stack: error.stack
                };
              }
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function graphqlSettingsPerReq(_x) {
    return _ref.apply(this, arguments);
  };
}();

var graphqlServer = (0, _koaGraphql["default"])(graphqlSettingsPerReq);
router.all('/graphql', graphqlServer);
app.use((0, _koaBodyparser["default"])());
app.use((0, _cors["default"])());
app.use(router.routes()).use(router.allowedMethods());
var _default = app;
exports["default"] = _default;