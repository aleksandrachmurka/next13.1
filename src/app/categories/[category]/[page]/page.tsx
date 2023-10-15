import { notFound } from "next/navigation";
import { getProductsByCategory } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CategoryProductsPage({
	params,
}: {
	params: { category: string; pageNumber: number };
}) {
	const products = await getProductsByCategory(params.category);

	if (!products) {
		notFound();
	}

	return (
		<>
			<h1>Products from {params.category} category</h1>
			<ProductList products={products} />
		</>
	);
}
