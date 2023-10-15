import { formatPrice } from "../../utils";

type ProductListItemDescriptionProps = Product;

type Product = {
	name: string;
	category?: string;
	price: number;
};

export const ProductItemDescription = ({
	name,
	category,
	price,
}: ProductListItemDescriptionProps) => (
	<div className="mt-2 flex justify-between">
		<div className="text-sm font-semibold text-slate-900">
			<h1>{name}</h1>
			<p className="text-sm font-light text-slate-900">
				<span className="sr-only">Kategoria:</span> {category}
			</p>
		</div>
		<p className="text-sm font-normal text-slate-900">
			<span className="sr-only">Cena:</span>
			{formatPrice(price / 100)}$
		</p>
	</div>
);
