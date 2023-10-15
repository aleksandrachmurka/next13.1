import Link from "next/link";

import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage";

import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => (
	<li>
		<Link href={`/product/${product.id}`}>
			<article>
				{product.images[0] && (
					<ProductListItemImage src={product.images[0].url} alt={product.name} />
				)}
				<ProductItemDescription
					name={product.name}
					category={product.categories[0] ? product.categories[0].name : ""}
					price={product.price}
				/>
			</article>
		</Link>
	</li>
);
