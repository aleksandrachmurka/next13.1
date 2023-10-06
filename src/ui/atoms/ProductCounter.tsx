"use client";

import { useState } from "react";

export const ProductCounter = () => {
	const [counter, setCounter] = useState<number>(0);
	return (
		<div>
			<button
				onClick={() => setCounter((counter) => counter + 1)}
				className="border border-slate-200 px-4"
			>
				+
			</button>
			<button
				onClick={() => setCounter((counter) => counter + 1)}
				className="border border-slate-200 px-4"
			>
				-
			</button>
			<input readOnly value={value} className="border border-slate-200" />
		</div>
	);
};
