import { executeGraphql } from "@/api/common";
import { CategoriesGetListDocument } from "@/gql/graphql";

export const getCategories = async () => {
	const graphqlResponse = await executeGraphql(CategoriesGetListDocument, {});

	return graphqlResponse.categories;
};
