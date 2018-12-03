import fs from 'fs';
import path from 'path';
import GraphQLJSON from 'graphql-type-json';

const dataPath = path.join(__dirname, '..', '..', 'data');

// Can use fs sync or async, async better if we have more disciplines
// For reference signature with context async (root, args, { models })
// graphql converts payload to JSON so convert to plain object
// todo: add try/catch for JSON parser errors

export default {
  JSON: GraphQLJSON,
  Query: {
    disciplines: async () => {
      // sync version
      const data = JSON.parse(
        fs.readFileSync(
          path.join(dataPath, 'software-engineering.json')
        )
      );
      // only one discipline so manually construct disciplines list
      const { id, title } = data;
      return [{ id, title }];
    },
    discipline: async (root, {id}) => {
      // async version
      return new Promise((resolve, reject) => {
        fs.readFile(
          path.join(dataPath, `${id}.json`),
          (err, data) => {
            if (err) reject(err);
            resolve(JSON.parse(data));
          }
        );
      });
    },
    roles: async (root, {id}) => {
      return new Promise((resolve, reject) => {
        fs.readFile(
          path.join(dataPath, `${id}.json`),
          (err, data) => {
            if (err) reject(err);
            // convert to plain object and filter out roles
            const { roles } = JSON.parse(data);
            resolve(roles);
          }
        );
      });
    },
  },
};
