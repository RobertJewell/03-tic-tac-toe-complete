import React from "react";
import { useStore } from "../store/store";
import Game from "../components/Game";
import ResultScreen from "../components/ResultScreen";

export default function Home() {
	const gameStage = useStore((state) => state.gameStage);

	return (
		<div>
			{gameStage === "playing" && <Game></Game>}

			{gameStage === "result" && <ResultScreen></ResultScreen>}
		</div>
	);
}
