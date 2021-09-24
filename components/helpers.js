export function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		/* 
                If squares[a] is not falsy (null in this case) and is equal to the value of squares[b] and squares[c]
                If we later want to expand the board to be x by x (defined by the user) 
                we could use array.every and compare every value to the current players symbol (X or O).
                We would also need to replace this function with array traversal where we "walk" across the array in different directions as the size of the board would be arbitrary.
                */
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

export function returnWinningSquares(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		/* 
                If squares[a] is not falsy (null in this case) and is equal to the value of squares[b] and squares[c]
                If we later want to expand the board to be x by x (defined by the user) 
                we could use array.every and compare every value to the current players symbol (X or O).
                We would also need to replace this function with array traversal where we "walk" across the array in different directions as the size of the board would be arbitrary.
                */
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return lines[i];
		}
	}
	return null;
}
