import { notFound } from "next/navigation";
import { getProductsByCollection } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

type CollectionPageProps = {
	params: {
		collection: string;
	};
};

export default async function CollectionPage({ params }: CollectionPageProps) {
	const products = await getProductsByCollection(params.collection);

	if (!products) {
		return notFound();
	}

	return (
		<section className="flex min-h-screen flex-col items-center p-12" data-testid="collections">
			<h2>Collection {params.collection}</h2>
			<ProductList products={products} />
		</section>
	);
}
