
function lengthOfLongestSubstring(s: string): number {
  let subStr = '';
  let leftIndex = 0;
  let rightIndex = 0;
  let largestLength = 0;
  while (leftIndex < s.length && rightIndex < s.length) {
    if (subStr.indexOf(s[rightIndex]) <= -1) {
      subStr = subStr + s[rightIndex];
      rightIndex++;
      largestLength = Math.max(largestLength, rightIndex - leftIndex);
    }
    else {
      subStr = subStr.replace(s[leftIndex], '');
      leftIndex++;
    }
  }
  return largestLength
}

const test = [
"tvqnkvovks",
"jbpnbwwd",
"qwnfenpglqdq",
"hkcpmprxxxqw",
"qrsvbspk",
"abcabcbb",
"bbbbb",
"pwwkew",
"",
" ",
"dvdf",
"anviaj",
];

test.forEach(item => {
  console.log(lengthOfLongestSubstring(item));
});