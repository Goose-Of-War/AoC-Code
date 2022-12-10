require('fs').readFile('./Aoc-Code/2022/day10input.txt', (err, buf) => {
	let cycle = 0, sum = 0, x = 1, Cycles = [...Array(7)].map((e, i) => 40 * i + 20);
	buf.toString().split('\r\n').forEach(line => {
		cycle++;
		if (Cycles.find(e => e === cycle)) {
			console.log(x, cycle, cycle*x);
			sum += cycle * x;
		}
		if (line.startsWith('noop')) return;
		cycle++;
		if (Cycles.find(e => e === cycle)) {
			console.log(x, cycle, cycle*x);
			sum += cycle * x;
		}
		x += ~~line.split(' ')[1];
	});
	console.log(sum);
});