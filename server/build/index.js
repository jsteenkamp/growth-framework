"use strict";

var _path = _interopRequireDefault(require("path"));

var _http = require("http");

var _express = _interopRequireDefault(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _apolloServerExpress = require("apollo-server-express");

var _config = _interopRequireDefault(require("config"));

var _schemas = _interopRequireDefault(require("./schemas"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: using babel so we can use ES modules with import
// config is loaded based on node ENV (from /config via config package)
const APP_PORT = process.env.PORT || _config.default.get('express.port');

const GRAPHQL_ENDPOINT = _config.default.get('graphql.path'); // public web server directory


const publicPath = _path.default.normalize(_path.default.join(__dirname, '..', 'public')); // express app


const app = (0, _express.default)(); // gzip response body

app.use((0, _compression.default)()); // static files mapped to public directory

app.use(_express.default.static(publicPath)); // Apollo server

const server = new _apolloServerExpress.ApolloServer({
  typeDefs: _schemas.default,
  resolvers: _resolvers.default,
  formatError: error => {
    //console.error(error);
    return error;
  }
}); // GraphiQL replaced with GraphQL Playground

if (process.env.NODE_ENV === 'development') {
  server.applyMiddleware({
    app,
    path: GRAPHQL_ENDPOINT,
    gui: {
      endpoint: GRAPHQL_ENDPOINT
    }
  });
} else {
  server.applyMiddleware({
    app,
    path: GRAPHQL_ENDPOINT
  });
} // HTML5 mode endpoint route forwards unhandled requests to index.html


app.all('*', (req, res) => {
  // client application index.html (app copied to public directory)
  res.sendFile('index.html', {
    root: publicPath
  }, err => {
    if (err) {
      res.sendFile('not-found.html', {
        root: publicPath
      }, err => {
        if (err) {
          console.error(err);
          res.status(err.status).end();
        }
      });
    }
  });
});
const httpServer = (0, _http.createServer)(app); // start server

httpServer.listen({
  port: APP_PORT
}, () => {
  // confirm where server is running...
  console.info(`Server:${process.env.NODE_ENV}`);
  console.info(`Port:${APP_PORT}`);
  console.info(`GraphQL:${server.graphqlPath}`);
});