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
        fs.readFileSync(path.join(dataPath, 'software-engineering.json'))
      );
      // only one discipline so manually construct disciplines list
      const { id, title } = data;
      return [{ id, title }];
    },
    discipline: async (root, { id }) => {
      // async version
      return new Promise((resolve, reject) => {
        fs.readFile(path.join(dataPath, `${id}.json`), (err, data) => {
          if (err) reject(err);
          // sort role skills to match order of skills
          const { skills, roles, ...rest } = JSON.parse(data);
          const rolesWithOrderedSkills = roles.map(role => {
            const orderedSkills = skills.map(skill =>
              role.skills.find(s => s.id === skill.id)
            );
            return { ...role, skills: orderedSkills };
          });
          resolve({ ...rest, skills, roles: rolesWithOrderedSkills });
        });
      });
    },
    roles: async (root, { id }) => {
      return new Promise((resolve, reject) => {
        fs.readFile(path.join(dataPath, `${id}.json`), (err, data) => {
          if (err) reject(err);
          // convert to plain object and filter out roles
          const { skills, roles } = JSON.parse(data);
          const rolesWithOrderedSkills = roles.map(role => {
            const orderedSkills = skills.map(skill =>
              role.skills.find(s => s.id === skill.id)
            );
            return { ...role, skills: orderedSkills };
          });
          resolve(rolesWithOrderedSkills);
        });
      });
    },
    role: async (root, { id, roleId }) => {
      return new Promise((resolve, reject) => {
        fs.readFile(path.join(dataPath, `${id}.json`), (err, data) => {
          if (err) reject(err);
          // convert to plain object and filter out roles
          const { skills, roles } = JSON.parse(data);
          const role = roles.find(role => role.id === roleId);
          const orderedSkills = skills.map(skill =>
            role.skills.find(s => s.id === skill.id)
          );
          resolve({ ...role, skills: orderedSkills });
        });
      });
    },
    skills: async (root, { id }) => {
      return new Promise((resolve, reject) => {
        fs.readFile(path.join(dataPath, `${id}.json`), (err, data) => {
          if (err) reject(err);
          // convert to plain object and filter out roles
          const { skills } = JSON.parse(data);
          resolve(skills);
        });
      });
    },
    skill: async (root, { id, skillId }) => {
      return new Promise((resolve, reject) => {
        fs.readFile(path.join(dataPath, `${id}.json`), (err, data) => {
          if (err) reject(err);
          // convert to plain object and filter out roles
          const { skills } = JSON.parse(data);
          const skill = skills.find(skill => skill.id === skillId);
          resolve(skill);
        });
      });
    },
  },
};
