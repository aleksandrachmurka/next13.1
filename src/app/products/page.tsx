import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";

import { getProducts } from "@/api/products";

type Rating = {
	rate: number;
	count: number;
};

export type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	category: string;
	description: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

const NUMBER_OF_PRODUCTS_PER_PAGE = 4;

export default async function Products() {
	const products = await getProducts();
	const numberOfPages = products.length / NUMBER_OF_PRODUCTS_PER_PAGE;
	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductList products={products} />
			<Pagination numberOfPages={numberOfPages} />
		</section>
	);
}
