import React from "react";
import { useStore } from "../store/store";
import Board from "./Board";
import HistoryDropdown from "./HistoryDropdown";
import PlayerIndicator from "./PlayerIndicator";

export default function Game({}) {
	const history = useStore((state) => state.history);
	const updateHistory = useStore((state) => state.updateHistory);
	const updateGameStage = useStore((state) => state.updateGameStage);
	const gameStep = useStore((state) => state.gameStep);
	const updateGameStep = useStore((state) => state.updateGameStep);
	const updateIsP1 = useStore((state) => state.updateIsP1);
	const updateWinner = useStore((state) => state.updateWinner);
	const updateWinningSquares = useStore((state) => state.updateWinningSquares);

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

	return (
		<div className="flex flex-col w-full md:flex-row">
			<div className="flex flex-col items-center h-auto pt-12 md:h-screen md:w-96 md:bg-blue-50">
				<h1 className="text-4xl font-black text-gray-700">Tic Tac Toe</h1>
				<HistoryDropdown
					history={history}
					stepNumber={gameStep}
					updateGameStep={updateGameStep}
					updateIsP1={updateIsP1}
				></HistoryDropdown>

				<button
					className="content-end hidden w-48 py-3 text-white bg-blue-700 rounded-lg mt-80 md:block"
					onClick={resetGame}
				>
					Reset Game
				</button>
			</div>
			<div className="flex flex-col items-center h-screen px-4 mx-auto sm:mt-12 md:flex-1">
				<div className="flex flex-col">
					<PlayerIndicator></PlayerIndicator>
					<Board />
				</div>

				<button
					className="block w-48 py-3 mt-12 text-white bg-blue-700 rounded-lg justify-self-end md:hidden"
					onClick={resetGame}
				>
					Reset Game
				</button>
			</div>
		</div>
	);
}
