import { notFound } from "next/navigation";
import {
	ProductsGetListDocument,
	ProductGetByIdDocument,
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetQuantityDocument,
} from "../gql/graphql";
import { executeGraphql } from "./common";

export const getProducts = async (): Promise<ProductListItemFragment[]> => {
	const response = await executeGraphql(ProductsGetListDocument, {});
	const products = response.products;

	return products;
};

export const getProductById = async (id: ProductListItemFragment["id"]) => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id,
	});

	if (!product) {
		notFound();
	}

	return product;
};

export const getProductsByCategory = async (category: string) => {
	const response = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: category,
	});

	if (!response.categories) {
		return null;
	}

	return response.categories[0]?.products;
};

export const getProductsByCollection = async (collection: string) => {
	const response = await executeGraphql(ProductsGetByCollectionSlugDocument, {
		slug: collection,
	});

	if (!response.collections) {
		return null;
	}

	return response.collections[0]?.products;
};

export const getProductsCount = async () => {
	const response = await executeGraphql(ProductsGetQuantityDocument, {});

	return response.productsConnection.aggregate.count;
};
