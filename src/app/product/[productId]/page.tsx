/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Metadata } from "next/types";
import { Suspense } from "react";
import { getProductById, getProducts } from "@/api/products";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { ProductItemCoverImage } from "@/ui/atoms/ProductItemCoverImage";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import type { ProductResponseItem } from "@/app/products/page";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products/" + params.productId);
	const product: ProductResponseItem = await res.json();

	return {
		title: product.title,
		description: product.description,
		openGraph: {
			title: product.title,
			description: product.description,
			images: [product.image],
		},
	};
}

export const generateStaticParams = async () => {
	const products = await getProducts();
	return products.map((product) => ({ productId: product.id }));
};

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<>
			<article className="max-w-xs">
				<ProductItemCoverImage alt={product.coverImage.alt} src={product.coverImage.src} />
				<ProductItemDescription
					name={product.name}
					category={product.category}
					price={product.price}
				/>
			</article>
			<aside>
				<Suspense fallback={<div>Loading...</div>}>
					<SuggestedProducts />
				</Suspense>
			</aside>
		</>
	);
}
