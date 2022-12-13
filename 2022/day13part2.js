require('fs').readFile('./2022/day13input.txt', (err, buf) => {
	function compareArrays (a, b) {
		// console.log(a, b);
		let i = 0;
		while (a[i] !== undefined && b[i] !== undefined) {
			if (!Array.isArray(a[i]) && !Array.isArray(b[i])) {
				if (a[i] !== b[i]) return Math.sign(b[i] - a[i]);
			}
			else if (Array.isArray(a[i]) && !Array.isArray(b[i])) {
				const returnValue = compareArrays(a[i], [b[i]]);
				if (returnValue) return returnValue;
			}
			else if (!Array.isArray(a[i]) && Array.isArray(b[i])) {
				const returnValue = compareArrays([a[i]], b[i]);
				if (returnValue) return returnValue;
			}
			else {
				const returnValue = compareArrays(a[i], b[i]);
				if (returnValue) return returnValue;
			}
			i++;
		}
		if (a[i] !== undefined) return -1;
		else if (b[i] !== undefined) return 1;
		else return 0;
	}

	const input = buf.toString().split('\r\n').map(e => eval(e)).filter(e => e).sort((a, b) => compareArrays(b, a));
	// input.forEach(e => console.log(e));
	let i = 0; 
	while ( compareArrays(input[i], [[2]]) === 1) i++;
	const a = i+1;
	input.push([[2]]);
	input.sort((a, b) => compareArrays(b, a));
	i = 0; 
	while (compareArrays(input[i], [[6]]) === 1) i++; 
	const b = i+1;
	console.log(a, b, a*b);
});