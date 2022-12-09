require('fs').readFile('./day8input.txt', (err, buf) => {
	const input = buf.toString().split('\r\n').map(line => line.split('').map(i => ~~i));
	result = [...Array(input.length)].map(e => [...Array(input[0].length)].map(e => true));
	let count = 0;
	for (let i=0; i<input.length; i++) {
		for (let j=0; j<input[i].length; j++) {
			// left to center
			count++;
			for (let k=0; k<j; k++) {
				if (input[i][j] <= input[i][k]) {
					result[i][j] = false;
					break;
				}
			}
			if (result[i][j]) continue;
			result[i][j] = true;
			// center to right
			for (let k=j+1; k<input[i].length; k++) {
				if (input[i][j] <= input[i][k]) {
					result[i][j] = false;
					break;
				}
			}
			
			if (result[i][j]) continue;
			result[i][j] = true;
			// top to center
			for (let k=0; k<i; k++) {
				if (input[i][j] <= input[k][j]) {
					result[i][j] = false;
					break;
				}
			}
			
			if (result[i][j]) continue;
			result[i][j] = true;
			// center to bottom
			for (let k=i+1; k<input.length; k++) {
				if (input[i][j] <= input[k][j]) {
					result[i][j] = false;
					break;
				}
			}
			
		}
	}
	console.log(result.map(e => e.reduce((a, b) => ~~a + ~~b)).reduce((a, b) => a+b));
})
