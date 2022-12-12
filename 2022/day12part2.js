require('fs').readFile('./2022/day12input.txt', (err, buf) => {
	if (err) throw err;
	const input = buf.toString().split('\r\n').map(line => line.split(''));
	// convert start positon to its elevation
	input[input.findIndex(row => row.find(e => e === 'S'))][input[input.findIndex(row => row.find(e => e === 'S'))].findIndex(e => e === 'S')] = 'a';
	// store end position, then replace it with its elevation
	const EndPosition = [
		input.findIndex(row => row.find(e => e === 'E') !== undefined), 
		input[input.findIndex(row => row.find(e => e === 'E'))].findIndex(e => e === 'E')
	].join(' ');
	input[input.findIndex(row => row.find(e => e === 'E'))][input[input.findIndex(row => row.find(e => e === 'E'))].findIndex(e => e === 'E')] = 'z';
	const records = [];
	for (let i = 0; i < input.length; i++ ) {
		for (let j = 0; j < input[i].length; j++) { 
			console.log(i, j);
			if (input[i][j] !== 'a') continue;

			const Iterations = [];

			function crawlIteration() {
				const precedence = 'SabcdefghijklmnopqrstuvwxyzE';
				const iter = new Set();
				const prevIter = Iterations.pop();
				Iterations.push(prevIter);
				let breakChecker = true;
				[...prevIter].forEach(pos => iter.add(pos));
				[...prevIter].forEach(pos => {
					const coord = pos.split(' ').map(e => ~~e);
					if (coord[0] - 1 >= 0) {
						if (precedence.indexOf(input[coord[0] - 1][coord[1]]) - precedence.indexOf(input[coord[0]][coord[1]]) <= 1) {
							if (!iter.has([coord[0] - 1, coord[1]].join(' '))) breakChecker = false;
							iter.add([coord[0] - 1, coord[1]].join(' '));
						}
					}
					if (coord[0] + 1 < input.length) {
						if (precedence.indexOf(input[coord[0] + 1][coord[1]]) - precedence.indexOf(input[coord[0]][coord[1]]) <= 1) {
							if (!iter.has([coord[0] + 1, coord[1]].join(' '))) breakChecker = false;
							iter.add([coord[0] + 1, coord[1]].join(' '));
						}
					}
					if (coord[1] - 1 >= 0) {
						if (precedence.indexOf(input[coord[0]][coord[1] - 1]) - precedence.indexOf(input[coord[0]][coord[1]]) <= 1) {
							if (!iter.has([coord[0], coord[1] - 1].join(' '))) breakChecker = false;
							iter.add([coord[0], coord[1] - 1].join(' '));
						}
					}
					if (coord[1] + 1 < input[0].length) {
						if (precedence.indexOf(input[coord[0]][coord[1] + 1]) - precedence.indexOf(input[coord[0]][coord[1]]) <= 1) {
							if (!iter.has([coord[0], coord[1] + 1].join(' '))) breakChecker = false;
							iter.add([coord[0], coord[1] + 1].join(' '));
						}
					}
				});
				Iterations.push(iter);
				// console.log(Iterations.length);
				return breakChecker;
			};
			
			Iterations.push(new Set());
			// store start position, then it replace with its elevation
			Iterations[0].add([i, j].join(' '));
			let skip ;
			while (!Iterations[Iterations.length - 1].has(EndPosition)) {
				skip = crawlIteration();
				if (skip) break;
				
			};
			if (skip) continue;
			records.push(Iterations.length - 1);
			// if (i === 20 && j === 0) console.log(Iterations.length - 1);
		}
	}
	console.log('Result:',records.reduce((a, b) => a > b ? b : a));
	// In case you're wondering, yes. This code was a load of baloney until last commit. I just reverse engineered the solution from the first part's answer. Now, it's fixed.
});