const aggregate = (stringArray) => {
  const map = new Map();

  stringArray.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });

  // сортировка по частоте повторов строки в исходном массиве
  const result = [...map].map((item) => {
    const obj = {
      key: item[0],
      count: item[1],
    };
    return obj;
  }).sort((a, b) => b.count - a.count);

  return result;
};

export default aggregate;
