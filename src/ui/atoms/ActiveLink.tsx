"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";
import type { Route } from "next";

type ActiveLinkProps = ComponentProps<typeof Link> & {
	exact?: boolean;
	activeClassName?: string;
};

export const ActiveLink = ({
	href,
	children,
	exact = false,
	className,
	activeClassName,
}: ActiveLinkProps) => {
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
