export function mapProperties<T>(
  item: T & { [key: string]: any },
  propertyMap: { [currentKey: string]: string }
): T {
  return Object.entries(propertyMap).reduce(
    (newObject, [currentKey, newKey]) => ({
      ...newObject,
      [newKey]: item[currentKey],
    }),
    item
  );
}
