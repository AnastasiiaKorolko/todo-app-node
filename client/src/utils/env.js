
 export function getEnv(name, defaultValue) {

  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return import.meta.env[name] || defaultValue;
  }

  if (typeof process !== 'undefined' && process.env) {
    return process.env[name] || defaultValue;
  }

  return defaultValue;
}