/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Metadata } from "next/types";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProductById, getProducts } from "@/api/products";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { ProductItemCoverImage } from "@/ui/atoms/ProductItemCoverImage";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: product.images,
		},
	};
}

export const generateStaticParams = async () => {
	const products = await getProducts(5);
	return products.map((product) => ({ productId: product.id }));
};

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	if (!product) {
		notFound();
	}

	return (
		<>
			<article className="max-w-xs">
				{product.images[0]?.url && (
					<ProductItemCoverImage alt={product.name} src={product.images[0].url} />
				)}
				<ProductItemDescription
					name={product.name}
					category={product.categories[0]?.name}
					price={product.price}
				/>
			</article>
			{product.categories[0]?.slug && (
				<aside className="pb-2">
					<Suspense fallback={<div>Loading...</div>}>
						<SuggestedProducts
							category={product.categories[0].slug}
							currentProductId={product.id}
						/>
					</Suspense>
				</aside>
			)}
		</>
	);
}
