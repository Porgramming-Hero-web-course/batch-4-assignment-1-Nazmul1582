const countWordOccurrences = (sentence: string, word: string): number => {
    const lower = sentence.toLowerCase();
    const wordLower = word.toLowerCase();
  
    return lower.split(" ").filter((g) => g === wordLower).length;
  };
  
  console.log(countWordOccurrences("Hello Bangladesh", "Bangladesh"));
  