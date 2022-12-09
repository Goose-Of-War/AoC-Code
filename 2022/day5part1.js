const sample = {
	1: 'GTRW'.split(''),
	2: 'GCHPMSVW'.split(''),
	3: 'CLTSGM'.split(''),
	4: 'JHDMWRF'.split(''),
	5: 'PQLHSWFJ'.split(''),
	6: 'PJDNFMS'.split(''),
	7: 'ZBDFGCSJ'.split(''),
	8: 'RTB'.split(''),
	9: 'HNWLC'.split('')
}

const movements = [
	[ '3', '4', '3' ],
	[ '3', '8', '6' ],
	[ '2', '3', '8' ],
	[ '3', '7', '2' ],
	[ '1', '1', '3' ],
	[ '6', '2', '7' ],
	[ '5', '3', '6' ],
	[ '1', '8', '6' ],
	[ '4', '4', '3' ],
	[ '2', '1', '2' ],
	[ '10', '7', '3' ],
	[ '1', '7', '2' ],
	[ '6', '5', '8' ],
	[ '1', '1', '4' ],
	[ '7', '6', '3' ],
	[ '22', '3', '4' ],
	[ '3', '2', '8' ],
	[ '4', '6', '8' ],
	[ '5', '2', '1' ],
	[ '3', '9', '4' ],
	[ '2', '4', '3' ],
	[ '1', '9', '2' ],
	[ '1', '5', '3' ],
	[ '1', '2', '6' ],
	[ '1', '5', '2' ],
	[ '1', '2', '7' ],
	[ '4', '4', '5' ],
	[ '2', '1', '9' ],
	[ '1', '1', '3' ],
	[ '2', '5', '9' ],
	[ '5', '9', '8' ],
	[ '1', '5', '9' ],
	[ '1', '7', '2' ],
	[ '1', '9', '4' ],
	[ '5', '6', '7' ],
	[ '1', '5', '2' ],
	[ '2', '2', '4' ],
	[ '2', '7', '4' ],
	[ '2', '7', '8' ],
	[ '21', '8', '6' ],
	[ '6', '3', '1' ],
	[ '1', '7', '9' ],
	[ '1', '1', '7' ],
	[ '7', '6', '8' ],
	[ '3', '1', '9' ],
	[ '24', '4', '8' ],
	[ '3', '1', '3' ],
	[ '10', '6', '8' ],
	[ '1', '4', '5' ],
	[ '1', '3', '9' ],
	[ '5', '9', '8' ],
	[ '11', '8', '3' ],
	[ '1', '5', '7' ],
	[ '1', '1', '8' ],
	[ '1', '6', '1' ],
	[ '19', '8', '1' ],
	[ '1', '7', '9' ],
	[ '10', '3', '1' ],
	[ '3', '3', '8' ],
	[ '1', '7', '3' ],
	[ '1', '9', '2' ],
	[ '23', '1', '7' ],
	[ '1', '1', '9' ],
	[ '1', '3', '6' ],
	[ '2', '6', '9' ],
	[ '7', '8', '1' ],
	[ '8', '8', '1' ],
	[ '11', '7', '2' ],
	[ '2', '6', '8' ],
	[ '1', '6', '8' ],
	[ '7', '8', '6' ],
	[ '1', '9', '4' ],
	[ '1', '8', '1' ],
	[ '10', '7', '1' ],
	[ '6', '2', '5' ],
	[ '5', '2', '9' ],
	[ '4', '5', '8' ],
	[ '1', '5', '8' ],
	[ '13', '1', '6' ],
	[ '1', '2', '4' ],
	[ '1', '4', '5' ],
	[ '2', '9', '4' ],
	[ '3', '9', '4' ],
	[ '2', '5', '3' ],
	[ '1', '3', '9' ],
	[ '2', '8', '5' ],
	[ '2', '5', '7' ],
	[ '2', '8', '6' ],
	[ '2', '7', '3' ],
	[ '2', '7', '8' ],
	[ '4', '1', '3' ],
	[ '3', '8', '4' ],
	[ '8', '4', '9' ],
	[ '1', '9', '8' ],
	[ '3', '3', '6' ],
	[ '4', '3', '9' ],
	[ '1', '8', '2' ],
	[ '12', '1', '5' ],
	[ '9', '6', '8' ],
	[ '1', '4', '8' ],
	[ '3', '1', '3' ],
	[ '12', '5', '8' ],
	[ '1', '2', '6' ],
	[ '1', '3', '1' ],
	[ '1', '3', '2' ],
	[ '1', '1', '2' ],
	[ '16', '6', '1' ],
	[ '1', '6', '3' ],
	[ '2', '3', '8' ],
	[ '7', '8', '5' ],
	[ '1', '2', '6' ],
	[ '1', '2', '1' ],
	[ '2', '9', '4' ],
	[ '1', '6', '7' ],
	[ '8', '9', '8' ],
	[ '5', '5', '6' ],
	[ '9', '8', '7' ],
	[ '12', '1', '3' ],
	[ '2', '6', '3' ],
	[ '6', '8', '9' ],
	[ '5', '1', '4' ],
	[ '2', '5', '7' ],
	[ '11', '7', '3' ],
	[ '1', '7', '4' ],
	[ '2', '6', '8' ],
	[ '7', '4', '6' ],
	[ '3', '8', '7' ],
	[ '3', '8', '2' ],
	[ '19', '3', '2' ],
	[ '4', '8', '7' ],
	[ '2', '9', '8' ],
	[ '1', '4', '5' ],
	[ '1', '6', '8' ],
	[ '1', '5', '7' ],
	[ '8', '9', '4' ],
	[ '1', '8', '5' ],
	[ '1', '5', '6' ],
	[ '4', '2', '7' ],
	[ '8', '6', '9' ],
	[ '6', '7', '3' ],
	[ '4', '3', '8' ],
	[ '5', '8', '7' ],
	[ '15', '2', '8' ],
	[ '8', '3', '4' ],
	[ '7', '9', '7' ],
	[ '3', '2', '4' ],
	[ '2', '7', '4' ],
	[ '2', '4', '3' ],
	[ '1', '9', '4' ],
	[ '9', '7', '5' ],
	[ '4', '5', '9' ],
	[ '2', '5', '3' ],
	[ '2', '9', '1' ],
	[ '3', '5', '2' ],
	[ '4', '3', '1' ],
	[ '7', '7', '4' ],
	[ '3', '2', '6' ],
	[ '4', '4', '5' ],
	[ '2', '1', '6' ],
	[ '8', '4', '1' ],
	[ '1', '8', '2' ],
	[ '1', '2', '8' ],
	[ '11', '8', '7' ],
	[ '3', '5', '9' ],
	[ '1', '5', '9' ],
	[ '11', '7', '1' ],
	[ '7', '8', '9' ],
	[ '11', '1', '3' ],
	[ '6', '4', '5' ],
	[ '8', '1', '7' ],
	[ '4', '6', '5' ],
	[ '3', '5', '8' ],
	[ '8', '7', '3' ],
	[ '7', '4', '7' ],
	[ '7', '5', '6' ],
	[ '3', '3', '8' ],
	[ '2', '4', '9' ],
	[ '16', '3', '1' ],
	[ '7', '7', '1' ],
	[ '2', '8', '7' ],
	[ '2', '8', '1' ],
	[ '1', '8', '4' ],
	[ '1', '7', '4' ],
	[ '2', '4', '2' ],
	[ '1', '8', '7' ],
	[ '1', '2', '3' ],
	[ '1', '2', '4' ],
	[ '1', '7', '8' ],
	[ '8', '6', '7' ],
	[ '1', '3', '5' ],
	[ '15', '1', '2' ],
	[ '4', '9', '1' ],
	[ '1', '8', '1' ],
	[ '11', '9', '2' ],
	[ '21', '2', '6' ],
	[ '1', '4', '2' ],
	[ '4', '2', '7' ],
	[ '1', '5', '9' ],
	[ '1', '9', '4' ],
	[ '19', '1', '2' ],
	[ '5', '2', '4' ],
	[ '8', '7', '6' ],
	[ '10', '6', '2' ],
	[ '5', '7', '5' ],
	[ '2', '4', '1' ],
	[ '3', '6', '9' ],
	[ '3', '9', '2' ],
	[ '1', '5', '2' ],
	[ '13', '6', '3' ],
	[ '2', '6', '9' ],
	[ '17', '2', '3' ],
	[ '1', '6', '2' ],
	[ '2', '2', '1' ],
	[ '2', '1', '5' ],
	[ '5', '5', '3' ],
	[ '2', '2', '8' ],
	[ '10', '2', '1' ],
	[ '18', '3', '8' ],
	[ '13', '8', '1' ],
	[ '7', '8', '2' ],
	[ '2', '2', '1' ],
	[ '4', '3', '8' ],
	[ '1', '2', '7' ],
	[ '1', '2', '8' ],
	[ '2', '4', '1' ],
	[ '1', '5', '4' ],
	[ '1', '9', '6' ],
	[ '1', '1', '7' ],
	[ '11', '3', '4' ],
	[ '1', '6', '2' ],
	[ '7', '1', '2' ],
	[ '5', '8', '5' ],
	[ '1', '7', '5' ],
	[ '3', '5', '1' ],
	[ '7', '1', '6' ],
	[ '6', '1', '6' ],
	[ '6', '1', '8' ],
	[ '2', '1', '3' ],
	[ '5', '2', '5' ],
	[ '1', '7', '6' ],
	[ '1', '4', '2' ],
	[ '4', '2', '4' ],
	[ '1', '1', '9' ],
	[ '1', '3', '8' ],
	[ '7', '8', '5' ],
	[ '1', '9', '7' ],
	[ '1', '9', '4' ],
	[ '8', '5', '7' ],
	[ '5', '4', '1' ],
	[ '4', '1', '6' ],
	[ '3', '1', '6' ],
	[ '3', '3', '6' ],
	[ '1', '5', '6' ],
	[ '3', '7', '5' ],
	[ '15', '6', '7' ],
	[ '12', '7', '4' ],
	[ '8', '5', '2' ],
	[ '3', '4', '9' ],
	[ '3', '9', '7' ],
	[ '1', '6', '2' ],
	[ '9', '4', '9' ],
	[ '4', '9', '1' ],
	[ '2', '1', '7' ],
	[ '3', '6', '4' ],
	[ '3', '6', '4' ],
	[ '2', '1', '2' ],
	[ '1', '5', '6' ],
	[ '2', '9', '4' ],
	[ '13', '4', '2' ],
	[ '22', '2', '3' ],
	[ '3', '7', '8' ],
	[ '1', '9', '6' ],
	[ '1', '9', '3' ],
	[ '2', '8', '9' ],
	[ '3', '9', '8' ],
	[ '5', '6', '4' ],
	[ '2', '8', '6' ],
	[ '4', '7', '8' ],
	[ '2', '2', '5' ],
	[ '4', '8', '7' ],
	[ '2', '5', '7' ],
	[ '7', '7', '2' ],
	[ '9', '4', '7' ],
	[ '4', '2', '1' ],
	[ '3', '7', '6' ],
	[ '12', '3', '5' ],
	[ '5', '2', '5' ],
	[ '1', '8', '2' ],
	[ '1', '3', '5' ],
	[ '4', '3', '1' ],
	[ '2', '6', '1' ],
	[ '11', '5', '3' ],
	[ '3', '6', '1' ],
	[ '8', '1', '9' ],
	[ '5', '9', '8' ],
	[ '2', '9', '7' ],
	[ '1', '1', '8' ],
	[ '4', '7', '6' ],
	[ '6', '3', '1' ],
	[ '1', '9', '7' ],
	[ '5', '7', '4' ],
	[ '3', '8', '3' ],
	[ '1', '6', '5' ],
	[ '2', '2', '1' ],
	[ '4', '7', '9' ],
	[ '3', '8', '6' ],
	[ '6', '3', '8' ],
	[ '6', '8', '7' ],
	[ '4', '6', '5' ],
	[ '6', '5', '8' ],
	[ '2', '9', '5' ],
	[ '2', '9', '8' ],
	[ '4', '7', '4' ],
	[ '1', '6', '3' ],
	[ '5', '8', '4' ],
	[ '1', '6', '9' ],
	[ '1', '7', '3' ],
	[ '7', '3', '8' ],
	[ '6', '1', '4' ],
	[ '6', '1', '2' ],
	[ '17', '4', '6' ],
	[ '4', '8', '5' ],
	[ '3', '3', '1' ],
	[ '5', '4', '1' ],
	[ '5', '2', '7' ],
	[ '7', '8', '1' ],
	[ '7', '7', '2' ],
	[ '4', '6', '3' ],
	[ '6', '1', '8' ],
	[ '2', '4', '9' ],
	[ '2', '5', '4' ],
	[ '1', '4', '3' ],
	[ '1', '4', '7' ],
	[ '2', '7', '5' ],
	[ '4', '5', '3' ],
	[ '1', '9', '1' ],
	[ '5', '5', '3' ],
	[ '1', '8', '5' ],
	[ '7', '6', '1' ],
	[ '6', '6', '8' ],
	[ '11', '3', '7' ],
	[ '2', '9', '1' ],
	[ '8', '8', '2' ],
	[ '5', '7', '5' ],
	[ '5', '7', '4' ],
	[ '1', '2', '6' ],
	[ '2', '4', '6' ],
	[ '1', '7', '5' ],
	[ '2', '6', '4' ],
	[ '10', '2', '6' ],
	[ '3', '4', '5' ],
	[ '1', '6', '4' ],
	[ '4', '6', '4' ],
	[ '6', '6', '9' ],
	[ '3', '3', '8' ],
	[ '19', '1', '8' ],
	[ '23', '8', '9' ],
	[ '1', '8', '1' ],
	[ '1', '1', '7' ],
	[ '1', '7', '1' ],
	[ '1', '1', '6' ],
	[ '5', '9', '5' ],
	[ '1', '8', '5' ],
	[ '5', '4', '5' ],
	[ '4', '5', '4' ],
	[ '1', '9', '1' ],
	[ '6', '9', '3' ],
	[ '2', '2', '8' ],
	[ '1', '1', '3' ],
	[ '1', '6', '7' ],
	[ '1', '7', '3' ],
	[ '1', '2', '5' ],
	[ '6', '9', '8' ],
	[ '5', '4', '5' ],
	[ '10', '5', '2' ],
	[ '10', '5', '2' ],
	[ '11', '9', '1' ],
	[ '4', '2', '6' ],
	[ '18', '2', '9' ],
	[ '2', '6', '9' ],
	[ '3', '3', '9' ],
	[ '1', '4', '3' ],
	[ '1', '6', '8' ],
	[ '6', '8', '4' ],
	[ '6', '5', '7' ],
	[ '19', '9', '4' ],
	[ '7', '1', '3' ],
	[ '1', '6', '8' ],
	[ '4', '8', '7' ],
	[ '2', '3', '6' ],
	[ '3', '1', '8' ],
	[ '1', '1', '5' ],
	[ '7', '7', '3' ],
	[ '8', '3', '1' ],
	[ '1', '5', '7' ],
	[ '2', '6', '2' ],
	[ '3', '1', '8' ],
	[ '1', '2', '6' ],
	[ '3', '1', '7' ],
	[ '4', '8', '9' ],
	[ '4', '7', '6' ],
	[ '3', '9', '7' ],
	[ '3', '9', '3' ],
	[ '6', '7', '3' ],
	[ '13', '3', '1' ],
	[ '5', '3', '4' ],
	[ '1', '8', '7' ],
	[ '1', '7', '9' ],
	[ '1', '8', '5' ],
	[ '1', '9', '4' ],
	[ '1', '5', '2' ],
	[ '2', '9', '2' ],
	[ '3', '6', '2' ],
	[ '1', '3', '7' ],
	[ '13', '4', '8' ],
	[ '14', '1', '5' ],
	[ '6', '2', '7' ],
	[ '4', '8', '7' ],
	[ '1', '1', '3' ],
	[ '1', '2', '6' ],
	[ '5', '4', '2' ],
	[ '4', '8', '4' ],
	[ '12', '5', '4' ],
	[ '1', '3', '8' ],
	[ '9', '4', '2' ],
	[ '9', '4', '5' ],
	[ '1', '4', '5' ],
	[ '6', '4', '3' ],
	[ '5', '8', '4' ],
	[ '9', '4', '7' ],
	[ '4', '2', '3' ],
	[ '8', '7', '1' ],
	[ '2', '7', '1' ],
	[ '2', '2', '9' ],
	[ '1', '6', '7' ],
	[ '2', '6', '3' ],
	[ '1', '2', '3' ],
	[ '2', '7', '3' ],
	[ '3', '3', '7' ],
	[ '8', '1', '2' ],
	[ '9', '5', '3' ],
	[ '15', '2', '7' ],
	[ '20', '7', '5' ],
	[ '23', '5', '6' ],
	[ '20', '6', '8' ],
	[ '1', '6', '4' ],
	[ '2', '9', '7' ],
	[ '1', '4', '6' ],
	[ '3', '7', '6' ],
	[ '2', '7', '5' ],
	[ '13', '3', '5' ],
	[ '3', '7', '1' ],
	[ '13', '5', '4' ],
	[ '3', '1', '4' ],
	[ '5', '6', '1' ],
	[ '6', '4', '3' ],
	[ '1', '7', '4' ],
	[ '11', '8', '6' ],
	[ '1', '8', '6' ],
	[ '2', '1', '5' ],
	[ '2', '5', '3' ],
	[ '11', '6', '5' ],
	[ '3', '8', '3' ],
	[ '4', '3', '5' ],
	[ '15', '5', '1' ],
	[ '1', '3', '5' ],
	[ '3', '8', '5' ],
	[ '1', '5', '9' ],
	[ '1', '5', '3' ],
	[ '9', '4', '6' ],
	[ '7', '6', '8' ],
	[ '2', '4', '6' ],
	[ '2', '5', '1' ],
	[ '8', '8', '7' ],
	[ '6', '6', '2' ],
	[ '1', '5', '2' ],
	[ '4', '3', '4' ],
	[ '6', '1', '5' ],
	[ '7', '3', '4' ],
	[ '2', '3', '2' ],
	[ '2', '8', '9' ],
	[ '9', '2', '5' ],
	[ '9', '5', '4' ],
	[ '2', '3', '6' ],
	[ '14', '1', '7' ],
	[ '15', '7', '2' ],
	[ '1', '1', '7' ],
	[ '7', '5', '1' ],
	[ '2', '9', '2' ],
	[ '2', '1', '7' ],
	[ '1', '1', '4' ],
	[ '2', '6', '8' ],
	[ '7', '2', '8' ],
	[ '1', '9', '6' ],
	[ '7', '8', '3' ],
	[ '1', '6', '4' ],
	[ '1', '8', '2' ],
	[ '6', '4', '6' ],
	[ '9', '2', '1' ],
	[ '1', '3', '9' ],
	[ '3', '7', '5' ]
]

movements.forEach(move => {
	const cache = [];
	const [quant, from, to] = move;
	[...Array(~~quant)].forEach(i => {
		sample[to].push(sample[from].pop())
	});
})

console.log([...Array(9)].map((e, i) => sample[i+1].pop()).join(''))