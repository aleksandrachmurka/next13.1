import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { getProductsByCategory } from "@/api/products";
import type { ProductListItemFragment } from "@/gql/graphql";

export const SuggestedProducts = async ({
	category,
	currentProductId,
}: {
	category: string;
	currentProductId: string;
}) => {
	const suggestedProducts = await getProductsByCategory(category);

	if (!suggestedProducts) {
		return null;
	}

	const otherProducts = suggestedProducts.filter(
		(product: ProductListItemFragment) => product.id !== currentProductId,
	);

	return (
		<>
			<h3>Related products</h3>
			<ul
				data-testid="related-products"
				className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			>
				{otherProducts
					?.slice(0, 4)
					.map((product: ProductListItemFragment) => (
						<ProductListItem key={product.id} product={product} />
					))}
			</ul>
		</>
	);
};
