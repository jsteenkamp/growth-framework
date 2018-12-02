import fs from 'fs';
import path from 'path';
import GraphQLJSON from 'graphql-type-json';

export default function(dataPath) {

  // Can use fs sync or async, async better if we have more disciplines
  // For reference signature with context async (root, args, { models })
  // graphql converts payload to JSON so convert to plain object
  // todo: add try/catch for JSON parser errors
  return {
    JSON: GraphQLJSON,
    Query: {
      disciplines: async () => {
        // sync version
        const data = JSON.parse(fs.readFileSync(path.join(dataPath, 'software-engineering.json')));
        // only one discipline so manually construct disciplines list
        const {id, title} = data;
        return [{id, title}];
      },
      discipline: async () => {
        // async version
        return new Promise((resolve, reject) => {
          fs.readFile(path.join(dataPath, 'software-engineering.json'), (err, data) => {
            if (err) reject(err);
            resolve(JSON.parse(data));
          });
        });
      },
    },
  };
}
