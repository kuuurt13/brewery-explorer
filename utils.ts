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

export function sortByProperty<T>(
  array: Array<T & { [key: string]: any }>,
  property: string
): T[] {
  return [...array].sort((a, b) => {
    if (a[property] > b[property]) {
      return -1;
    }

    if (a[property] < b[property]) {
      return 1;
    }

    return 0;
  });
}
