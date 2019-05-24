# Movies TMDb API GraphQL
GraphQL Api created to consume TMDb REST API. You can use this api with this link below passing on body the queries that you can see after getting started: 

[https://tmdb-api-backend.herokuapp.com/graphql](https://tmdb-api-backend.herokuapp.com/graphql) 

## Getting Started
```
# clone repo
$ git clone https://github.com/daniloab/movies-backend.git
$ cd movies-backend

# install dependencies
$ yarn install

# build and start project 
$ yarn start

# to see on graphi graphql interface on localhost link
$ yarn dev and open the link below
http://localhost:8080/graphql
```

## Queries
- Movies Upcoming
```
{ 
	moviesUpcoming(search: "", page: 1){
		title, 
		overview,
		release_date
	    poster_path
	    backdrop_path
	    genre_ids
	}
}
```
- Movie Details
```
{
	movie(movie_id: id){
		title
	    backdrop_path
	    poster_path
	    genres {
	      name
	    }   		
	}
}
```

## Tools and Frameworks
- GraphQL
- Koa Framework
- Babel Transpiler
- GraphQL Relay
- Dotenv