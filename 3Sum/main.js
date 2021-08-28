function threeSum(nums) {
}
;
var getSum = function (nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
};
var nums = [-1, 0, 1, 2, -1, -4];
console.log(getSum(nums));
