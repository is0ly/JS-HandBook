const anagram = (first, second) => {
  return Array.from(first).every(elem => {
    return Array.from(second).includes(elem) && first.length === second.length;
  });
};

console.log(anagram("dom", "mdo"));
