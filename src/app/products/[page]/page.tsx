import { ProductList } from "@/ui/organisms/ProductList";

import { getProducts, getProductsCount } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";

const PRODUCTS_PER_PAGE = 4;

export async function generateStaticParams() {
	const productsCount = await getProductsCount();
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);
	const pages = [...Array(numberOfPages).keys()];
	return pages.map((page) => ({ params: { page: page.toString() } }));
}

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const offset = Number(params.page) > 1 ? (Number(params.page) - 1) * PRODUCTS_PER_PAGE : 0;
	const products = await getProducts(PRODUCTS_PER_PAGE, offset);

	const productsCount = await getProductsCount();
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductList products={products} />
			<Pagination numberOfPages={numberOfPages} />
		</section>
	);
}
