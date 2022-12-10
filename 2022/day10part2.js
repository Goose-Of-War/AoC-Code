require('fs').readFile('./Aoc-Code/2022/day10input.txt', (err, buf) => {
	let cycle = line = sum = 0, x = 1, Lines = [[]];
	function cycleAction () {
		cycle++;
		Lines[line].push((cycle >= x && cycle <= x+2) ? '#' : ' ');
		if (cycle % 40 === 0) {
			console.log(Lines[line].join(''));
			line++;
			Lines.push([]);
			cycle = 0;
		}
	}
	buf.toString().split('\r\n').forEach(line => {
		cycleAction();
		if (line.startsWith('noop')) return;
		cycleAction();
		x += ~~line.split(' ')[1];
	});
	console.log(sum);
});