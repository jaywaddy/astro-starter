import { features } from "./features";

export type TPricePlan = {
	description: string;
	discount: number;
	features: { asterisk?: string; name: string; list: boolean }[];
	featureTitle: string;
	id: string;
	isFeatured: boolean;
	label: string;
	note?: string;
	price: {
		annual: number;
		month: number;
		once: number;
	};
};

const discount = 0.1;
const calPrices = (base: number) => {
	const savingsRate = 0.05;
	const savingsAmount = base * savingsRate;

	return {
		annual: Math.round(base - savingsAmount),
		month: base,
		once: base * 12 * 5,
	};
};

const services: TPricePlan[] = [
	{
		label: "Basic",
		description: "This is the most basic plan.",
		id: "p_1",
		discount: discount,
		features: [
			{ name: features["f_1"], list: true },
			{ name: features["f_2"], list: true },
			{ name: features["f_3"], list: true },
		],
		featureTitle: featureTitle(),
		isFeatured: false,
		price: calPrices(197),
		note: "+$6/per seat",
	},
	{
		label: "Premium",
		description: "This is the most premium plan.",
		id: "p_2",
		discount: discount,
		features: [
			{ name: features["f_1"], list: false },
			{ name: features["f_2"], list: false },
			{ name: features["f_3"], list: false },
			{ name: features["f_4"], list: true },
			{ name: features["f_5"], list: true },
			{
				name: features["f_6"],
				list: true,

				asterisk: "+$35/per additional",
			},
			{
				name: features["f_7"],
				list: true,

				asterisk: "+$35/per additional",
			},
		],
		featureTitle: featureTitle("Basic"),
		isFeatured: true,
		price: calPrices(297),
		note: "+$12/per seat",
	},
];

function featureTitle(prevPlan?: string) {
	if (prevPlan) {
		return `All ${prevPlan} features, plus:`;
	}

	return "All features";
}

export default services;
