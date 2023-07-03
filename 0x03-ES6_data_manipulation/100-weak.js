export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.get(endpoint)) weakMap.set(endpoint, weakMap.get(endpoint));

  if (weakMap.get(endpoint) + 1 >= 5) { throw new Error('Endpoint load is high'); }
}
