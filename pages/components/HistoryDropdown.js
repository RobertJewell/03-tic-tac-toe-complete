import { Listbox } from "@headlessui/react";
import { Fragment } from "react";
import { SelectorIcon } from "@heroicons/react/solid";
import { useStore } from "../store/store";

export default function HistoryDropdown() {
	const history = useStore((state) => state.history);
	const updateIsP1 = useStore((state) => state.updateIsP1);
	const gameStep = useStore((state) => state.gameStep);
	const updateGameStep = useStore((state) => state.updateGameStep);

	const jumpTo = (step) => {
		updateGameStep(step);
		updateIsP1(step % 2 === 0);
	};

	return (
		<div className="relative z-20 mt-8 text-gray-700">
			<Listbox value={gameStep} onChange={jumpTo}>
				<Listbox.Button className="relative w-48 p-3 rounded-lg shadow-lg cursor-default bg-blue-50 md:bg-white focus:outline-none ">
					<span className="flex text-left pointer-events-none">
						Current move: {gameStep}
					</span>
					<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						<SelectorIcon
							className="w-5 h-5 text-gray-400"
							aria-hidden="true"
						/>
					</span>
				</Listbox.Button>
				<Listbox.Options className="absolute w-48 py-2 rounded-lg shadow-lg bg-blue-50 md:bg-white top-14 focus:outline-none">
					{history.map((step, index) => (
						<Listbox.Option key={index} value={index} as={Fragment}>
							{({ active, selected }) => (
								<li
									className={`${active && "bg-blue-100 "} ${
										selected && "bg-blue-200 text-gray-900"
									}
                                    px-6 py-2 cursor-pointer`}
									onClick={() => jumpTo(index)}
								>
									Go to move: {index}
								</li>
							)}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
		</div>
	);
}
