import React from "react";
import NextImage from "next/image";

type ProductListItemCoverImageProps = {
	alt: string;
	src: string;
};

const IMAGE_WIDTH = 320;
const IMAGE_HEIGHT = 320;

export const ProductItemCoverImage = ({ alt, src }: ProductListItemCoverImageProps) => (
	<div className="hover: aspect-square overflow-hidden rounded-md border bg-slate-100 bg-slate-50">
		<NextImage
			width={IMAGE_WIDTH}
			height={IMAGE_HEIGHT}
			src={src}
			alt={alt}
			className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
		/>
	</div>
);
