import React, { useState } from "react";
import { useStore } from "./store/store";
import Game from "./components/Game";
import ResultScreen from "./components/ResultScreen";

export default function Home() {
	// const [gameStage, setGameStage] = useState("setup");

	const gameStage = useStore((state) => state.gameStage);
	const updateGameStage = useStore((state) => state.updateGameStage);

	return (
		<div>
			{gameStage === "playing" && <Game></Game>}

			{gameStage === "result" && <ResultScreen></ResultScreen>}
		</div>
	);
}
