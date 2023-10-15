import { executeGraphql } from "@/api/common";
import { CollectionsGetListDocument } from "@/gql/graphql";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphql(CollectionsGetListDocument, {});

	return graphqlResponse.collections;
};
