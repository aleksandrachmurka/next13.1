import Link from "next/link";
import type { ProductListItemType } from "./ProductListItem.types";

import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { ProductItemCoverImage } from "@/ui/atoms/ProductItemCoverImage";

type ProductListItemProps = {
	product: ProductListItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => (
	<li>
		<Link href={`/product/${product.id}`}>
			<article>
				<ProductItemCoverImage alt={product.coverImage.alt} src={product.coverImage.src} />
				<ProductItemDescription
					name={product.name}
					category={product.category}
					price={product.price}
				/>
			</article>
		</Link>
	</li>
);
