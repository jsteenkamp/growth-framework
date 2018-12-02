// NOTE: using babel so we can use ES modules with import
import path from 'path';
import { createServer } from 'http';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import config from 'config';
import schemas from './schemas';
import resolvers from './resolvers';

// config is loaded based on node ENV (from /config via config package)
const APP_PORT = process.env.PORT || config.get('express.port');
const GRAPHQL_ENDPOINT = config.get('graphql.path');
// public web server directory
const publicPath = path.normalize(path.join(__dirname, '..', 'public'));

// express app
const app = express();

// gzip response body
app.use(compression());

// static files mapped to public directory
app.use(express.static(publicPath));

// must set this explicitly for large GraphQL payloads
app.use(bodyParser.json({ limit: '50mb' }));

// Apollo server
const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  formatError: error => {
    //console.error(error);
    return error;
  },
});

// GraphiQL replaced with GraphQL Playground

if (process.env.NODE_ENV === 'development') {
  server.applyMiddleware({
    app,
    path: GRAPHQL_ENDPOINT,
    gui: {
      endpoint: GRAPHQL_ENDPOINT,
    },
  });
} else {
  server.applyMiddleware({ app, path: GRAPHQL_ENDPOINT });
}

// HTML5 mode endpoint route forwards unhandled requests to index.html
app.all('*', (req, res) => {
  // client application index.html (app copied to public directory)
  res.sendFile('index.html', { root: publicPath }, err => {
    if (err) {
      res.sendFile('not-found.html', { root: publicPath }, err => {
        if (err) {
          console.error(err);
          res.status(err.status).end();
        }
      });
    }
  });
});

const httpServer = createServer(app);

// start server
httpServer.listen({ port: APP_PORT }, () => {
  // confirm where server is running...
  console.info(`Server:${process.env.NODE_ENV}`);
  console.info(`Port:${APP_PORT}`);
  console.info(`GraphQL:${server.graphqlPath}`);
});

