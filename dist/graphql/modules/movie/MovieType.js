"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphql = require("graphql");

var _GenreType = _interopRequireDefault(require("./GenreType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CollectionType = new _graphql.GraphQLObjectType({
  name: 'Collection',
  description: 'Movie Collection that belongs',
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
      },
      poster_path: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.poster_path;
        }
      },
      backdrop_path: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.backdrop_path;
        }
      }
    };
  }
});
var ProductionCompaniesType = new _graphql.GraphQLObjectType({
  name: 'ProductionCompanies',
  description: 'Movie Production Companies',
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
      },
      logo_path: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.logo_path;
        }
      },
      origin_country: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.origin_country;
        }
      }
    };
  }
});
var ProductionCountriesType = new _graphql.GraphQLObjectType({
  name: 'ProductionCountries',
  description: 'Movie Production Countries',
  fields: function fields() {
    return {
      iso_3166_1: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
        resolve: function resolve(movie) {
          return movie.iso_3166_1;
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
var SpokenLanguagesType = new _graphql.GraphQLObjectType({
  name: 'SpokenLanguages',
  description: 'Movie Spoken Languages',
  fields: function fields() {
    return {
      iso_639_1: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
        resolve: function resolve(movie) {
          return movie.iso_639_1;
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

var _default = new _graphql.GraphQLObjectType({
  name: 'Movie',
  description: 'Movie data',
  fields: function fields() {
    return {
      adult: {
        type: _graphql.GraphQLBoolean,
        resolve: function resolve(movie) {
          return movie.adult;
        }
      },
      backdrop_path: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.backdrop_path;
        }
      },
      belongs_to_collection: {
        type: CollectionType,
        resolve: function resolve(movie) {
          return movie.belongs_to_collection;
        }
      },
      budget: {
        type: _graphql.GraphQLID,
        resolve: function resolve(movie) {
          return movie.budget;
        }
      },
      genre_ids: {
        type: new _graphql.GraphQLList(_graphql.GraphQLFloat),
        resolve: function resolve(movie) {
          return movie.genre_ids;
        }
      },
      genres: {
        type: new _graphql.GraphQLList(_GenreType["default"]),
        resolve: function resolve(movie) {
          return movie.genres;
        }
      },
      homepage: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.homepage;
        }
      },
      id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
        resolve: function resolve(movie) {
          return movie.id;
        }
      },
      imdb_id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.imdb_id;
        }
      },
      original_language: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.original_language;
        }
      },
      original_title: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.original_title;
        }
      },
      overview: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.overview;
        }
      },
      popularity: {
        type: _graphql.GraphQLFloat,
        resolve: function resolve(movie) {
          return movie.popularity;
        }
      },
      poster_path: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.poster_path;
        }
      },
      production_companies: {
        type: new _graphql.GraphQLList(ProductionCompaniesType),
        resolve: function resolve(movie) {
          return movie.production_companies;
        }
      },
      production_countries: {
        type: new _graphql.GraphQLList(ProductionCountriesType),
        resolve: function resolve(movie) {
          return movie.production_countries;
        }
      },
      release_date: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.release_date;
        }
      },
      revenue: {
        type: _graphql.GraphQLFloat,
        resolve: function resolve(movie) {
          return movie.revenue;
        }
      },
      runtime: {
        type: _graphql.GraphQLID,
        resolve: function resolve(movie) {
          return movie.runtime;
        }
      },
      spoken_languages: {
        type: new _graphql.GraphQLList(SpokenLanguagesType),
        resolve: function resolve(movie) {
          return movie.spoken_languages;
        }
      },
      status: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.status;
        }
      },
      tagline: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.tagline;
        }
      },
      title: {
        type: _graphql.GraphQLString,
        resolve: function resolve(movie) {
          return movie.title;
        }
      },
      video: {
        type: _graphql.GraphQLBoolean,
        resolve: function resolve(movie) {
          return movie.video;
        }
      },
      vote_average: {
        type: _graphql.GraphQLFloat,
        resolve: function resolve(movie) {
          return movie.vote_average;
        }
      },
      vote_count: {
        type: _graphql.GraphQLFloat,
        resolve: function resolve(movie) {
          return movie.vote_count;
        }
      }
    };
  }
});

exports["default"] = _default;