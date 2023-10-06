import { ProductListItem } from "@/ui/molecules/ProductListItem";
import type { ProductListItemType } from "@/ui/molecules/ProductListItem.types";
import { getProducts } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(() => setTimeout(resolve, ms)));

export const SuggestedProducts = async () => {
	const suggestedProducts = await getProducts();
	await sleep(5000);
	return (
		<ul
			data-testid="products-list"
			className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
		>
			{suggestedProducts.map((product: ProductListItemType) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
