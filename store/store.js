import create from "zustand";
import { devtools } from "zustand/middleware";

const initalHistory = [
	{
		squares: Array(9).fill(null),
	},
];

export const useStore = create(
	devtools((set) => ({
		//history
		history: initalHistory,
		resetHistory: () =>
			set([
				{
					squares: Array(9).fill(null),
				},
			]),

		updateHistory: (newHistory) => set(() => ({ history: newHistory })),

		//gameStage
		gameStage: "playing",
		updateGameStage: (newGameStage) => set(() => ({ gameStage: newGameStage })),

		//gameStep
		gameStep: 0,
		updateGameStep: (newGameStep) => set(() => ({ gameStep: newGameStep })),
		incrementGameStep: () => set((state) => ({ gameStep: state.gameStep + 1 })),

		//currentPlayer
		isP1: true,
		swapIsP1: () => set((state) => ({ isP1: !state.isP1 })),
		updateIsP1: (newIsP1) => set(() => ({ isP1: newIsP1 })),

		//Winner
		winner: "",
		updateWinner: (newWinner) => set(() => ({ winner: newWinner })),

		//Winning squares
		winningSquares: null,
		updateWinningSquares: (newWinningSquares) => {
			set(() => ({ winningSquares: newWinningSquares }));
		},
	}))
);
