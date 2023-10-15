import { getCollections } from "@/api/collections";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export default async function Home() {
	const collections = await getCollections();

	return (
		<>
			<main className="flex min-h-screen flex-col items-center p-12">
				<h1>Home</h1>
				<section>
					<ul className="mt -5 flex justify-center space-x-4">
						{collections.map((collection) => (
							<li key={collection.id}>
								<ActiveLink href={`/collections/${collection.slug}`} exact>
									{collection.name}
								</ActiveLink>
							</li>
						))}
					</ul>
				</section>
			</main>
		</>
	);
}
