const solution = (str) => {
  const arrayFromArgs = str.split(' ');

  const splitted = arrayFromArgs.reduce((acc, item) => {
    acc.push(item);
    return acc;
  }, []);

  return splitted
    .reduce((acc, item) => {
      if (item.length > 0) {
        acc.push(item[0].toUpperCase() + item.substring(1));
      }
      if (!item.length > 0) {
        acc.push(item);
      }
      return acc;
    }, [])
    .join(' ');
};
