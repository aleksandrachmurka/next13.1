"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
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

	return (
		<Link
			href={href}
			className={clsx("text-blue-400 hover:text-blue-600", { underline: isActive })}
			aria-current={isActive ? "page" : false}
		>
			{children}
		</Link>
	);
};
