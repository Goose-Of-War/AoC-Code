require('fs').readFile('./2022/day12input.txt', (err, buf) => {
	if (err) throw err;
	const input = buf.toString().split('\r\n').map(line => line.split(''));
	const Iterations = [];

	function crawlIteration() {
		const precedence = 'SabcdefghijklmnopqrstuvwxyzE';
		const iter = new Set();
		const prevIter = Iterations.pop();
		Iterations.push(prevIter);
		[...prevIter].forEach(pos => {
			const coord = pos.split(' ').map(e => ~~e);
			if (coord[0] - 1 >= 0) {
				if (precedence.indexOf(input[coord[0] - 1][coord[1]]) - precedence.indexOf(input[coord[0]][coord[1]]) <= 1) iter.add(
					[coord[0] - 1, coord[1]].join(' ')
				);
			}
			if (coord[0] + 1 < input.length) {
				if (precedence.indexOf(input[coord[0] + 1][coord[1]]) - precedence.indexOf(input[coord[0]][coord[1]]) <= 1) iter.add(
					[coord[0] + 1, coord[1]].join(' ')
				);
			}
			if (coord[1] - 1 >= 0) {
				if (precedence.indexOf(input[coord[0]][coord[1] - 1]) - precedence.indexOf(input[coord[0]][coord[1]]) <= 1) iter.add(
					[coord[0], coord[1] - 1].join(' ')
				);
			}
			if (coord[1] + 1 < input[0].length) {
				if (precedence.indexOf(input[coord[0]][coord[1] + 1]) - precedence.indexOf(input[coord[0]][coord[1]]) <= 1) iter.add(
					[coord[0], coord[1] + 1].join(' ')
				);
			}
		});
		Iterations.push(iter);
	};
	
	Iterations.push(new Set());
	// store start position, then it replace with its elevation
	Iterations[0].add([
		input.findIndex(row => row.find(e => e === 'S') !== undefined), 
		input[input.findIndex(row => row.find(e => e === 'S'))].findIndex(e => e === 'S')
	].join(' '));
	input[input.findIndex(row => row.find(e => e === 'S'))][input[input.findIndex(row => row.find(e => e === 'S'))].findIndex(e => e === 'S')] = 'a';
	// store end position, then replace it with its elevation
	const EndPosition = [
		input.findIndex(row => row.find(e => e === 'E') !== undefined), 
		input[input.findIndex(row => row.find(e => e === 'E'))].findIndex(e => e === 'E')
	].join(' ');
	input[input.findIndex(row => row.find(e => e === 'E'))][input[input.findIndex(row => row.find(e => e === 'E'))].findIndex(e => e === 'E')] = 'z';
	
	while (!Iterations[Iterations.length - 1].has(EndPosition)) crawlIteration();
	console.log(Iterations.length - 1);	
});