import type { ProductListItemType } from "@/ui/molecules/ProductListItem.types";

export const PRODUCTS: ProductListItemType[] = [
	{
		id: "1",
		name: "Pumpkin spice",
		category: "vegetables",
		price: 4999,
		coverImage: { src: "/pumpkin.png", alt: "pumpkin cat hat" },
	},
	{
		id: "2",
		name: "Veni Vidi Vici",
		category: "historical",
		price: 6999,
		coverImage: { src: "/julius.png", alt: "julius cesar cat hat" },
	},
	{
		id: "3",
		name: "Welcome to Valhalla",
		category: "mythological",
		price: 7999,
		coverImage: { src: "/brunhilda.png", alt: "brunhilde cat hat" },
	},
	{
		id: "4",
		name: "Strawberry garden",
		category: "fruits",
		price: 5999,
		coverImage: { src: "/strawberry.png", alt: "strawberry cat hat" },
	},
];
