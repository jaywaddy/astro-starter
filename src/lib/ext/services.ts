export type TPricePlan = {
	features: {
		name: string;
		value: boolean | string;
	}[];
	highlighted: boolean;
	name: string;
	price: {
		annually: number;
		monthly: number;
		once: number;
	};
};

const pricing: TPricePlan[] = [
	{
		name: "Basic",
		features: [
			{ name: "feature_1", value: true },
			{ name: "feature_2", value: true },
			{ name: "feature_3", value: true },
		],
		highlighted: false,
		price: { annually: 1997, monthly: 197, once: 4997 },
	},
	{
		name: "Premium",
		features: [
			{ name: "feature_1", value: true },
			{ name: "feature_2", value: true },
			{ name: "feature_3", value: true },
			{ name: "feature_4", value: true },
			{ name: "feature_5", value: true },
			{ name: "feature_6", value: true },
			{ name: "feature_7", value: "Conditional" },
		],
		highlighted: true,
		price: { annually: 2997, monthly: 297, once: -1 },
	},
];

export default pricing;
