import fs from 'fs';
import path from 'path';
import GraphQLJSON from 'graphql-type-json';

const dataPath = path.join(__dirname, '..', '..', 'data');

// Can use fs sync or async, async better if we have more disciplines
// For reference signature with context async (root, args, { models })
// graphql converts payload to JSON so convert to plain object
// todo: add try/catch for JSON parser errors

const parseDataFile = (id, resolve, reject) => {
  fs.readFile(path.join(dataPath, `${id}.json`), (err, data) => {
    if (err) reject(err);
    // sort role skills to match order of skills and add skill title
    const { skills, roles, ...rest } = JSON.parse(data);
    const rolesWithOrderedSkills = roles.map(role => {
      const orderedSkills = skills.map(({ id, title }) => ({
        ...role.skills.find(s => s.id === id),
        title,
      }));
      return { ...role, skills: orderedSkills };
    });
    resolve({ ...rest, skills, roles: rolesWithOrderedSkills });
  });
};

export default {
  JSON: GraphQLJSON,
  Query: {
    disciplines: async () => {
      // sync version - example only, best to use async
      const data = JSON.parse(
        fs.readFileSync(path.join(dataPath, 'software-engineering.json'))
      );
      // only one discipline so manually construct disciplines list
      const { id, title } = data;
      return [{ id, title }];
    },
    discipline: async (root, { id }) => {
      // async version
      return new Promise((resolve, reject) =>
        parseDataFile(id, resolve, reject)
      );
    },
    roles: async (root, { id }) => {
      return new Promise((resolve, reject) => {
        const parseData = data => resolve(data.roles);
        parseDataFile(id, parseData, reject);
      });
    },
    role: async (root, { id, roleId }) => {
      return new Promise((resolve, reject) => {
        const parseData = data =>
          resolve(data.roles.find(role => role.id === roleId));
        parseDataFile(id, parseData, reject);
      });
    },
    skills: async (root, { id }) => {
      return new Promise((resolve, reject) => {
        const parseData = data => resolve(data.skills);
        parseDataFile(id, parseData, reject);
      });
    },
    skill: async (root, { id, skillId }) => {
      return new Promise((resolve, reject) => {
        const parseData = data =>
          resolve(data.skills.find(skill => skill.id === skillId));
        parseDataFile(id, parseData, reject);
      });
    },
  },
};
