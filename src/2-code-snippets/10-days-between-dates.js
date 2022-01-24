const daysBetweenDates = (dateA, dateB) => {
  const timeDifference = Math.abs(dateA.getTime() - dateB.getTime());
  return Math.floor(timeDifference / (3600 * 24 * 1000));
};

daysBetweenDates(new Date('2020/10/21'), new Date('2020/10/29'));
daysBetweenDates(new Date('2020/10/21'), new Date('2021/10/29'));

console.log(daysBetweenDates(new Date('2020/10/21'), new Date('2020/10/29')));
console.log(daysBetweenDates(new Date('2020/10/21'), new Date('2021/10/29')));
