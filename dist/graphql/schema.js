"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = void 0;

var _graphql = require("graphql");

var _QueryType = _interopRequireDefault(require("./types/QueryType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schema = new _graphql.GraphQLSchema({
  query: _QueryType["default"]
});
exports.schema = schema;