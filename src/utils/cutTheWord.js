const cutTheWord = (word, end) => {
  const isWordCut = word?.length > end;
  return { isWordCut, result: isWordCut ? `${word.slice(0, end)}...` : word };
};

export default cutTheWord;
