const sum = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144].reduce(function(a, b) {
	return a + b;
}, 0);
console.log(sum);