function sumOfNumbers(numbers){
	let result = []; 
	let sum = 0;
	for(let row = numbers.length - 1; row >= 0;  row--){
		sum+=numbers[row];
		result.unshift(sum)
	}
	result.push(0);
	return(result);
}

console.log(sumOfNumbers([1,2,3,4,5,6,]))
console.log(sumOfNumbers([744125, 935, 407, 454, 430,90,144, 6710213, 889, 810, 2579358]))



	
	