function lengthOfLongestSubstring(s) {
    var subStr = '';
    var leftIndex = 0;
    var rightIndex = 0;
    var largestLength = 0;
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
    return largestLength;
}
var test = [
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
test.forEach(function (item) {
    console.log(lengthOfLongestSubstring(item));
});
