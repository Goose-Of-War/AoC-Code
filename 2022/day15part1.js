require('fs').readFile('./2022/day15inputmodified.txt', (err, buf) => {
	const grid = {}, sensors = [], beacons = [];
	buf.toString().split('\r\n').map(line => {
		const [sensor, beacon] = line.split(':');
		sensors.push(sensor.split(',').map(e => ~~e));
		beacons.push(beacon.split(',').map(e => ~~e));
		grid[sensor] = 'S';
		grid[beacon] = 'B';
	});
	let count = 0;
	sensors.forEach((sensor, _) => {
		const beacon = beacons[_];
		const dist = Math.abs(sensor[0] - beacon[0]) + Math.abs(sensor[1] - beacon[1]);
		const y = 2000000;
		for (let i = 0; i <= dist - Math.abs(sensor[1] - y); i++) {
			if (!grid[`${sensor[0]-i},${y}`]) {
				count++;
				grid[`${sensor[0]-i},${y}`] = '#';
			}
			if (!grid[`${sensor[0]+i},${y}`]) {
				count++;
				grid[`${sensor[0]+i},${y}`] = '#';
			}
		}
	});
	console.log('Count:', count);
});