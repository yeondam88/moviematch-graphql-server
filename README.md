# moviematch-graphql-server (GraphQL Wrapper of the MovieDB API)
GraphQL server for moviematch react application *[powered by themoviedb.org](https://themoviedb.org)*

## Deployed with Now [Click to play with API](https://moviematch-graphql-jzjfsgbwzd.now.sh/)

### Available queries
- trendMovies(time_window: String!, media_type: String!): [Movie!]!
- nowPlayingMovies: [Movie!]!
- upcomingMovies: [Movie!]!
- movieRecommendations(id: Int!): [RecommendationMovies!]!
- popularMovies: [Movie!]!
- topRatedMovies: [Movie!]!
- movieImages(id: Int!): MovieImage!
- movieDetail(id: Int!): MovieDetail!
- search(query: String!): [Movie!]!
