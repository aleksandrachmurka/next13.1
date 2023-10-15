import type { TypedDocumentString } from "../gql/graphql";

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: { "Content-Type": "application/json" },
	});

	type GraphqlResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlProductsResponse = (await res.json()) as GraphqlResponse<TResult>;

	if (graphqlProductsResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlProductsResponse.errors,
		});
	}

	return graphqlProductsResponse.data;
};
