function theEFilter(sentences) {

  const result = sentences.filter(sentences => sentences.match("e")|| sentences.match("E"));
  return result;
}
// Do not remove the following line, it is for tests
module.exports = theEFilter;
