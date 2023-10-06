"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import type { Route } from "next";

export type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
};
export const ActiveLink = <T extends string>({
	href,
	children,
	exact = false,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : href.startsWith(pathname.substring(1));

	const className = "border-b-2 border-b-transparent text-sm";
	const activeClassName = "border-b-2 border-b-black text-sm font-semibold";

	return (
		<Link
			href={href}
			className={isActive ? activeClassName : className}
			aria-current={isActive ? "page" : false}
		>
			{children}
		</Link>
	);
};
