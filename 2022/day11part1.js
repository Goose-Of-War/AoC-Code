require('fs').readFile('./2022/day11inputmodified.txt', (err, buf) => {
	if (err) throw err;
	const input = buf.toString().split('\r\n\r\n').map(record => {
		return {
			count: 0,
			action: record.split('\r\n')[1],
			divisibility: [2,3,4].map(i => ~~record.split('\r\n')[i]),
			currentStack: record.split('\r\n')[0].split(',').map(e => ~~e)
		};
	});
	console.log(input.map(r => r.currentStack), '\n');
	[...Array(20)].forEach((_, i) => {
		console.log('Iteration', i);
		input.forEach(rec => {
			rec.count += rec.currentStack.length;
			while (rec.currentStack.length) {
				let next, prev = rec.currentStack.pop();
				eval(rec.action);
				next = Math.floor(next / 3);
				input[next % rec.divisibility[0] ? rec.divisibility[2] : rec.divisibility[1]].currentStack.push(next);
			}
			console.log(input.map(r => r.currentStack), '\n');
		});
	});
	
	input.sort((a, b) => -(a.count > b.count));
	console.log([0,1].map(e => input[e].count).reduce((a,b) => a * b));
});