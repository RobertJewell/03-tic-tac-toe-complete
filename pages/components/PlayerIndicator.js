import React from "react";
import { useStore } from "../store/store";

export default function PlayerIndicator() {
	const isP1 = useStore((state) => state.isP1);

	return (
		<div className="w-full mt-6">
			<div className="relative flex items-center justify-between h-12 mx-2 font-bold">
				<p className="z-10 w-1/2 text-center text-blue-700">Player 1</p>
				<p className="z-10 w-1/2 text-center text-pink-700">Player 2</p>
				<div
					className={`absolute w-1/2 h-2 bg-blue-500 transition rounded-lg -bottom-2 ${
						isP1 ? "left-0" : "translate-x-full bg-pink-500"
					}`}
				></div>
			</div>
		</div>
	);
}
