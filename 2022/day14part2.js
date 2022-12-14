require('fs').readFile('./2022/day14input.txt', (err, buf) => {
	const grid = {};
	let maxDepth = 0;
	buf.toString().split('\r\n').forEach(line => line.split(' -> ').reduce((a, b) => {
		const [aX, aY] = a.split(',').map(x => ~~x);
		const [bX, bY] = b.split(',').map(x => ~~x);
		if (aX === bX) {
			if (bY > aY) {
				for (let i = aY; i <= bY; i++) grid[`${aX},${i}`] = 'F';
				if (bY > maxDepth) maxDepth = bY;
			} else {
				for (let i = bY; i <= aY; i++) grid[`${aX},${i}`] = 'F';
				if (aY > maxDepth) maxDepth = aY;
			}
		} else {
			if (aY > maxDepth) maxDepth = aY;
			if (bX > aX) {
				for (let i = aX; i <= bX; i++) grid[`${i},${aY}`] = 'F';
			} else {
				for (let i = bX; i <= aX; i++) grid[`${i},${aY}`] = 'F';
			}
		}
		return b;
	}));

	console.log('MaxDepth:', maxDepth);
	for (let i = 0; i <= 1000; i++) grid[`${i},${maxDepth+2}`] = 'F';

	function grainTravel (x, y) {
		if (grid[`${x},${y}`]) return -1;
		if (!grid[`${x},${y+1}`]) return grainTravel(x, y+1);
		if (!grid[`${x-1},${y+1}`]) return grainTravel(x-1, y+1);
		if (!grid[`${x+1},${y+1}`]) return grainTravel(x+1, y+1);
		grid[`${x},${y}`] = 'S';
		return 1;
	}

	let grainCount = 0;
	while (grainTravel(500, 0) === 1) grainCount++;
	console.log('Count', grainCount);
});