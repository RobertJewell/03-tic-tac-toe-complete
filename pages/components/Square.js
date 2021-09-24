import React, { useEffect } from "react";
import { useStore } from "../store/store";
import { motion } from "framer-motion";

export default function square({ value, i, onClick, winner }) {
	const winningSquares = useStore((state) => state.winningSquares);

	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	return (
		<button
			className={`w-24 h-24 m-2 text-5xl font-black bg-gray-200 rounded sm:w-32 sm:h-32 xl:w-36 xl:h-36 ${
				winningSquares?.includes(winner) && "bg-green-400"
			}
			${value === "X" ? "text-blue-700" : "text-pink-700"}`}
			onClick={() => onClick(i)}
		>
			{value && (
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						type: "spring",
						damping: 3,
						mass: 0.2,
						stiffness: 100,
					}}
				>
					{value}
				</motion.div>
			)}
		</button>
	);
}
