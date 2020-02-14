const chunkString = string => {
    const array = string.split("");

    const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size).join("")
        );

    return chunk(array, 3);
};

console.log(chunkString("AUGUUUUCUUAAAUG"));
