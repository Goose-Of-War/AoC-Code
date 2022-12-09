require('fs').readFile('./day9input.txt', (err, buf) => {
	const input = buf.toString();
	let head = [0, 0];
	let tail = [0, 0];
	let count = new Set();
	count.add(tail.join(' '));
	input.split('\r\n').forEach(line => {
		// console.log(line);
		const [direction, steps] = line.split(' ');
		switch (direction) {
			case 'U': {
				[...Array(~~steps)].forEach(() => {
					if ((head[1] - tail[1]) === 1) tail = [...head];
					head[1] += 1;
					count.add(tail.join(' '));
				});
				break;
			} case 'D': {
				[...Array(~~steps)].forEach(() => {
					if ((head[1] - tail[1]) === -1) tail = [...head];
					head[1] -= 1;
					count.add(tail.join(' '));
				});
				break;
			} case 'L': {
				[...Array(~~steps)].forEach(() => {
					if ((head[0] - tail[0]) === -1) tail = [...head];
					head[0] -= 1;
					count.add(tail.join(' '));
				});
				break;
			} case 'R': {
				[...Array(~~steps)].forEach(() => {
					if ((head[0] - tail[0]) === 1) tail = [...head];
					head[0] += 1;
					count.add(tail.join(' '));
				});
				break;
			}
			default: {
				console.log(direction);
			}
		}
		
		// console.log(count);
	});
	console.log(count.size);
})