import type { ProductListItemType } from "./ProductListItem.types";

import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";

type ProductListItemProps = {
	product: ProductListItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => (
	<li>
		<article>
			<ProductListItemCoverImage alt={product.coverImage.alt} src={product.coverImage.src} />
			<ProductListItemDescription
				name={product.name}
				category={product.category}
				price={product.price}
			/>
		</article>
	</li>
);
