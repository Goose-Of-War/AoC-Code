function adjustPosition (head, tail) {
	const Tail = [...tail];
	if (head[0] - tail[0] > 1) Tail[0] = head[0] - 1;
	else if (head[0] - tail[0] < -1) Tail[0] = head[0] + 1;
	else if (head[1] - tail[1] > 1 || head[1] - tail[1] < -1) Tail[0] = head[0];

	if (head[1] - tail[1] > 1) Tail[1] = head[1] - 1;
	else if (head[1] - tail[1] < -1) Tail[1] = head[1] + 1;
	else if (head[0] - tail[0] > 1 || head[0] - tail[0] < -1) Tail[1] = head[1];
	
	tail.forEach((e, i) => {
		tail[i] = Tail[i]
	});
}

require('fs').readFile('./day9input.txt', (err, buf) => {
	const input = buf.toString();
	let rope = [...Array(10)].map(() => [0, 0]);
	let count = new Set();
	count.add(rope[8].join(' '));
	input.split('\r\n').forEach((line, k) => {
		console.log(line);
		const [direction, steps] = line.split(' ');
		[...Array(~~steps)].forEach((_, j) => {
			switch (direction) {
				case 'U': {
					rope[0][1] += 1;
					break;
				} case 'D': {
					rope[0][1] -= 1;
					break;
				} case 'L': {
					rope[0][0] -= 1;
					break;
				} case 'R': {
					rope[0][0] += 1;
					break;
				}
				default: {
					console.log(direction);
				}
			}
			[...Array(9)].forEach((e, i) => adjustPosition(rope[i], rope[i+1]));
			count.add(rope[9].join(' '));
		});
		// console.log(rope);
	});
	console.log(count.size);
});