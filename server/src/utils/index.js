export { generateToken, payloadFromToken } from './jwt';

// helper to delay responses for testing
// usage myPromise().then(sleeper(2000)).then(...).catch(...)
export const sleeper = ms => x =>
  new Promise(resolve => setTimeout(() => resolve(x), ms));
