// version 1
const maxSubArray = (nums) => {
	console.time("start");
	let maxSoFar = Number.MIN_SAFE_INTEGER;
	let curMax = 0;
  
  // console.time("start");
	for (let i = 0; i < nums.length; i++) {
		curMax += nums[i];
		if (maxSoFar < curMax) maxSoFar = curMax;
		if (curMax < 0) curMax = 0;
	}
	// console.timeEnd("start");
	return maxSoFar;
};


console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));

// version 2 using Math.max instead of if statements
function maxSubArraySum(a) {
	const lenOfArr = a.length;
	let maxSoFar = a[0];
	let curMax = a[0];
	// console.time("start2");
	for (let i = 1; i < lenOfArr; i++) {
		curMax = Math.max(a[i], curMax + a[i]); // determines the Current max is greater than
		maxSoFar = Math.max(maxSoFar, curMax);
	}
	// console.timeEnd("start2");
	return maxSoFar;
}

// Driver code

console.log("Maximum contiguous sum is ", maxSubArraySum([1]));
console.log("Maximum contiguous sum is ", maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]));
console.log("Maximum contiguous sum is ", maxSubArraySum([5, 4, -1, 7, 8]));
console.log("Maximum contiguous sum is ", maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// variation on kadane's algorithm 
var maxProfit = function (prices) {
	let curMax = 0,
		maxProfit = 0;

	for (let i = 1; i < prices.length; i++) {
		curMax = Math.max(0, (curMax += prices[i] - prices[i - 1]));
		maxProfit = Math.max(curMax, maxProfit);
	}

	return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));