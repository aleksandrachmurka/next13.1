import type { ProductListItemType } from "@/ui/molecules/ProductListItem.types";

type Rating = {
	rate: number;
	count: number;
};
type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	category: string;
	description: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

export const getProducts = async (pageParam?: string) => {
	const data = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=20${
			pageParam ? `&offset=${pageParam}` : ""
		}`,
	);
	const productsResponse = (await data.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProductItem);

	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const data = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await data.json()) as ProductResponseItem;

	const product = productResponseItemToProductItem(productResponse);
	return product;
};

const productResponseItemToProductItem = (product: ProductResponseItem): ProductListItemType => ({
	id: product.id,
	name: product.title,
	category: product.category,
	price: product.price,
	description: product.description,
	coverImage: {
		alt: product.title,
		src: product.image,
	},
});
