const anagram = (first, second) => Array.from(first).every((elem) => Array.from(second).includes(elem) && first.length === second.length);

console.log(anagram('dom', 'mdo'));
