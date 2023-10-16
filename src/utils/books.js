export const getUniqueList = (array) => {
  const uniqueItems = {};
  const result = [];

  for (const item of array) {
    if (!uniqueItems[item.id]) {
      uniqueItems[item.id] = true;
      result.push(item);
    }
  }

  return result;
};
