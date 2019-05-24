"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphql = require("graphql");

var _default = new _graphql.GraphQLObjectType({
  name: 'Genres',
  description: 'Movie Genres',
  fields: function fields() {
    return {
      id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
        resolve: function resolve(movie) {
          return movie.id;
        }
      },
      name: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.name;
        }
      }
    };
  }
});

exports["default"] = _default;