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

	console.log(buf.toString().split('\r\n\r\n')
	.map(record => compareArrays(eval(record.split('\r\n')[0]), eval(record.split('\r\n')[1])))
	.map((e, i) => e === 1 ? i+1 : 0).reduce((a, b) => a+b));
});