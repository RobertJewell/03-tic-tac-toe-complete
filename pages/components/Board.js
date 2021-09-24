import React from "react";
import Square from "./Square";
import { useStore } from "../store/store";
import { calculateWinner } from "./helpers";

export default function Board() {
	const history = useStore((state) => state.history);
	const updateHistory = useStore((state) => state.updateHistory);
	const isP1 = useStore((state) => state.isP1);
	const swapIsP1 = useStore((state) => state.swapIsP1);
	const gameStep = useStore((state) => state.gameStep);
	const updateGameStep = useStore((state) => state.updateGameStep);
	const updateGameStage = useStore((state) => state.updateGameStage);
	const updateWinner = useStore((state) => state.updateWinner);

	let squares = history[gameStep].squares;

	const handleClick = (i) => {
		//rewrite history... or at least the history object
		const newHistory = history.slice(0, gameStep + 1);
		const current = history[newHistory.length - 1];
		const squares = [...current.squares];

		//if the current board is a win, or the clicked square is already full, return early
		if (calculateWinner(squares) || squares[i]) {
			return;
		}

		//Fill square
		squares[i] = isP1 ? "X" : "O";

		updateHistory(
			newHistory.concat([
				{
					squares: squares,
				},
			])
		);
		updateGameStep(newHistory.length);
		swapIsP1();

		//Check board for a win
		if (!calculateWinner(squares) && !squares.includes(null)) {
			updateGameStage("result");
		}
		if (calculateWinner(squares)) {
			updateGameStage("result");
			updateWinner(calculateWinner(squares));
		}
	};

	return (
		<div className="mx-auto mt-6 board">
			{squares.map((value, i) => (
				<Square
					key={i}
					winner={i}
					value={squares[i]}
					onClick={() => handleClick(i)}
				/>
			))}
		</div>
	);
}
