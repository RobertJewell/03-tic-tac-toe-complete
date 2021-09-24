import React from "react";
import { useStore } from "../store/store";
import Board from "./Board";
import { returnWinningSquares } from "./helpers";

export default function ResultScreen() {
	const history = useStore((state) => state.history);
	const updateHistory = useStore((state) => state.updateHistory);
	const updateGameStage = useStore((state) => state.updateGameStage);
	const gameStep = useStore((state) => state.gameStep);
	const updateGameStep = useStore((state) => state.updateGameStep);
	const updateIsP1 = useStore((state) => state.updateIsP1);
	const winner = useStore((state) => state.winner);
	const updateWinner = useStore((state) => state.updateWinner);
	const updateWinningSquares = useStore((state) => state.updateWinningSquares);

	const winningSquares = returnWinningSquares(history[gameStep].squares);
	updateWinningSquares(winningSquares);

	const resetGame = () => {
		updateGameStep(0);
		updateGameStage("playing");
		updateIsP1(true);
		updateWinner(null);
		updateWinningSquares(null);
		updateHistory([
			{
				squares: Array(9).fill(null),
			},
		]);
	};

	let resultMessage = "";
	if (winner === null) {
		resultMessage = "It's a Draw";
	} else resultMessage = `${winner === "X" ? "Player 1" : "Player 2"} won!`;

	return (
		<div className="absolute flex flex-col items-center justify-center w-screen h-screen bg-white">
			<h2 className="text-3xl font-bold text-gray-700">{resultMessage}</h2>
			<Board></Board>
			<button
				className="w-48 py-3 mt-12 text-white bg-blue-700 rounded-lg"
				onClick={resetGame}
			>
				Play again
			</button>
		</div>
	);
}
