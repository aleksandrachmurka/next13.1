"use client";

import { ActiveLink } from "../atoms/ActiveLink";

export const Pagination = ({ numberOfPages }: { numberOfPages: number }) => {
	const className = " border-2 border-slate-900 rounded-md p-2 hover:bg-slate-500";
	const activeClassName = "font-bold border-5 bg-slate-500";

	const slots = Array(numberOfPages).fill(0);

	return (
		<div aria-label="pagination" className="mt-4 flex items-center justify-center gap-4">
			{slots.map((_, index) => (
				<ActiveLink key={index} href={`/products/${index + 1}`}>
					{index + 1}
				</ActiveLink>
			))}
		</div>
	);
};
