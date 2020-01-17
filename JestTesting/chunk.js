const chunkedArray = (arr, len) => {
  const chunked = []

  arr.forEach(val => {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === len){
      chunked.push([val]);
    }else {
      last.push(val)
    }
  });

  return chunked
}

module.exports = chunkedArray;