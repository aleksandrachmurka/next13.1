import { ProductList } from "@/ui/organisms/ProductList";

export default function Products() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
				<ProductList />
			</section>
		</main>
	);
}
