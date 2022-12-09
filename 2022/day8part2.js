require('fs').readFile('./day8input.txt', (err, buf) => {
	const input = buf.toString().split('\r\n').map(line => line.split('').map(i => ~~i));
	let max = 0;
	for (let i=0; i<input.length; i++) {
		for (let j=0; j<input[i].length; j++) {
			let prod = 1;
			let count = 0;
			// left to center
			for (let k=j-1; k>-1; k--) {
				count++;
				if (input[i][j] <= input[i][k]) {
					break;
				}
			}
			prod *= count;
			count = 0;
			// center to right
			for (let k=j+1; k<input[i].length; k++) {
				count++;
				if (input[i][j] <= input[i][k]) {
					break;
				}
			}
			prod *= count;
			count = 0;
			// top to center
			for (let k=i-1; k>-1; k--) {
				count++;
				if (input[i][j] <= input[k][j]) {
					break;
				}
			}
			prod *= count;
			count = 0;
			// center to bottom
			for (let k=i+1; k<input.length; k++) {
				count++;
				if (input[i][j] <= input[k][j]) {
					break;
				}
			}
			prod *= count;
			count = 0;
			if (prod > max) max = prod;
		}
	}
	console.log(max);
})
