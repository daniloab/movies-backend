"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _graphql = require("graphql");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _MovieType = _interopRequireDefault(require("../modules/movie/MovieType"));

var _GenreType = _interopRequireDefault(require("../modules/movie/GenreType"));

var _SearchType = _interopRequireDefault(require("../modules/movie/SearchType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

var _process$env = process.env,
    api_url = _process$env.api_url,
    api_key = _process$env.api_key;

var _default = new _graphql.GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: function fields() {
    return {
      moviesUpcoming: {
        type: new _graphql.GraphQLList(_MovieType["default"]),
        args: {
          page: {
            type: _graphql.GraphQLFloat
          }
        },
        resolve: function () {
          var _resolve = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(root, args) {
            var _ref, search, page, urlMoviesUpcoming, response, data;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _ref = args || {}, search = _ref.search, page = _ref.page;
                    urlMoviesUpcoming = "".concat(api_url, "/movie/upcoming?api_key=").concat(api_key, "&language=en-US&page=").concat(page);
                    _context.next = 5;
                    return (0, _nodeFetch["default"])(urlMoviesUpcoming);

                  case 5:
                    response = _context.sent;
                    _context.next = 8;
                    return response.json();

                  case 8:
                    data = _context.sent;
                    return _context.abrupt("return", data.results);

                  case 12:
                    _context.prev = 12;
                    _context.t0 = _context["catch"](0);
                    console.log(_context.t0);

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 12]]);
          }));

          function resolve(_x, _x2) {
            return _resolve.apply(this, arguments);
          }

          return resolve;
        }()
      },
      movie: {
        type: _MovieType["default"],
        args: {
          movie_id: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
          }
        },
        resolve: function () {
          var _resolve2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2(root, args) {
            var _ref2, movie_id, url, response, data;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _ref2 = args || {}, movie_id = _ref2.movie_id;
                    url = "".concat(api_url, "/movie/").concat(movie_id, "?api_key=").concat(api_key, "&language=en-US");
                    _context2.next = 5;
                    return (0, _nodeFetch["default"])(url);

                  case 5:
                    response = _context2.sent;
                    _context2.next = 8;
                    return response.json();

                  case 8:
                    data = _context2.sent;
                    return _context2.abrupt("return", data);

                  case 12:
                    _context2.prev = 12;
                    _context2.t0 = _context2["catch"](0);
                    console.log('error', _context2.t0);

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[0, 12]]);
          }));

          function resolve(_x3, _x4) {
            return _resolve2.apply(this, arguments);
          }

          return resolve;
        }()
      },
      genres: {
        type: new _graphql.GraphQLList(_GenreType["default"]),
        resolve: function () {
          var _resolve3 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3(root, args) {
            var url, response, data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    url = "".concat(api_url, "/genre/movie/list?api_key=").concat(api_key, "&language=en-US");
                    _context3.next = 4;
                    return (0, _nodeFetch["default"])(url);

                  case 4:
                    response = _context3.sent;
                    _context3.next = 7;
                    return response.json();

                  case 7:
                    data = _context3.sent;
                    return _context3.abrupt("return", data.genres);

                  case 11:
                    _context3.prev = 11;
                    _context3.t0 = _context3["catch"](0);
                    console.log('error', _context3.t0);

                  case 14:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, null, [[0, 11]]);
          }));

          function resolve(_x5, _x6) {
            return _resolve3.apply(this, arguments);
          }

          return resolve;
        }()
      },
      moviesSearch: {
        type: _SearchType["default"],
        args: {
          query: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
          },
          page: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLFloat)
          }
        },
        resolve: function () {
          var _resolve4 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4(root, args) {
            var query, page, url, response, data;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    console.log('entrou');
                    query = args.query, page = args.page;
                    url = "".concat(api_url, "/search/movie?api_key=").concat(api_key, "&query=").concat(query, "&page=").concat(page, "&language=en-US");
                    _context4.next = 6;
                    return (0, _nodeFetch["default"])(url);

                  case 6:
                    response = _context4.sent;
                    _context4.next = 9;
                    return response.json();

                  case 9:
                    data = _context4.sent;
                    console.log(data);
                    return _context4.abrupt("return", data);

                  case 14:
                    _context4.prev = 14;
                    _context4.t0 = _context4["catch"](0);
                    console.log('error', _context4.t0);

                  case 17:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[0, 14]]);
          }));

          function resolve(_x7, _x8) {
            return _resolve4.apply(this, arguments);
          }

          return resolve;
        }()
      }
    };
  }
});

exports["default"] = _default;