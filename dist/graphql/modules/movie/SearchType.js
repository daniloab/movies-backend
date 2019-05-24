"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphql = require("graphql");

var _MovieType = _interopRequireDefault(require("./MovieType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = new _graphql.GraphQLObjectType({
  name: 'Search',
  description: 'Search Movie',
  fields: function fields() {
    return {
      page: {
        type: _graphql.GraphQLFloat,
        resolve: function resolve(search) {
          return movie.page;
        }
      },
      total_results: {
        type: _graphql.GraphQLFloat,
        resolve: function resolve(search) {
          return movie.total_results;
        }
      },
      total_pages: {
        type: _graphql.GraphQLFloat,
        resolve: function resolve(search) {
          return movie.total_pages;
        }
      },
      results: {
        type: new _graphql.GraphQLList(_MovieType["default"]),
        resolve: function resolve(search) {
          return movie.results;
        }
      }
    };
  }
});

exports["default"] = _default;