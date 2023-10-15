import type { ProductListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ products }: { products: ProductListItemFragment[] }) => (
	<ul
		data-testid="products-list"
		className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
	>
		{products.map((product: ProductListItemFragment) => (
			<ProductListItem key={product.id} product={product} />
		))}
	</ul>
);
