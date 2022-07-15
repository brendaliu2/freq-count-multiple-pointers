// add whatever parameters you deem necessary & write doc comment

/** returns true if word can be build with letters, otherwise return false*/

function canConstructWord(word,letters) {
  if (!letters.length) return false;
  //make freq for word
  const wordFreq = frequencyMaker(word);
  //make freq for letters
  const lettersFreq = frequencyMaker(letters);

  //loop through word freq
  for(let key in wordFreq){
    //if key: value is <= key: value letter freq
    //if not return false
    if(wordFreq[key] > lettersFreq[key]) return false;
  }
  //return true
  return true;
}

function frequencyMaker (string) {
  //make freq
  const freq = {};

  //loop through string
  for (let letter of string){
  //add letter if it doesn't exist
  //increment if it already in freq
    freq[letter] = (freq[letter] || 0) + 1;
  }

  //return freq
  return freq;

}
