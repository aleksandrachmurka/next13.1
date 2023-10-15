import { ProductList } from "@/ui/organisms/ProductList";

import { getProducts } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";

export async function generateStaticParams() {
	const products = await getProducts();
	const numberOfPages = Math.ceil(products.length / 20);
	const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
	return pages.map((page) => ({ params: { page: page.toString() } }));
}

const PRODUCTS_PER_PAGE = 4;

export default async function ProductsPage({ params }: { params: { page: string } }) {
	console.log(params.page);
	const products = await getProducts();
	const numberOfPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductList products={products} />
			<Pagination numberOfPages={numberOfPages} />
		</section>
	);
}
