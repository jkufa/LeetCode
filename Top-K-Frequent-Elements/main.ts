function topKFrequent(nums: number[], k: number): number[] {
  let numsMap = new Map();
  let maxs = [];
  let i = 0;

  for (let i = 0; i < k; i++) {
    maxs.push(0);
  }

  // Get each unique number
  if(!numsMap.keys()) {
    numsMap.set(nums[i],1);
    i++;
  }
  while(i < nums.length) {
    if (numsMap.get(nums[i])) {
      numsMap.set(nums[i],numsMap.get(nums[i])+1);
    }
    else {
     numsMap.set(nums[i],1);
    }
    i++;
  }
  i = 0;

  let sortedMap = new Map([...numsMap.entries()].sort((k,v) => k[1] - v[1]).reverse());

  return [...sortedMap.keys()].slice(0,k);
};

console.log(topKFrequent([4,2,1,1,1,2,2,3],2));