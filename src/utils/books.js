export const getUniqueList = (array) => {
  if (array && array.length > 0) {
    const uniqueItems = {};
    const result = [];

    for (const item of array) {
      if (!uniqueItems[item.id]) {
        uniqueItems[item.id] = true;
        result.push(item);
      }
    }

    return result;
  } else {
    return [];
  }
};
