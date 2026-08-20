import { features } from "./features";

export type TPricePlan = {
	description: string;
	discount: number;
	features: { asterisk?: string; name: string; list: boolean }[];
	featureTitle: string;
	highlighted: boolean;
	name: string;
	note?: string;
	price: {
		annual: number;
		month: number;
		once: number;
	};
};

const discount = 0.1;

const pricing: TPricePlan[] = [
	{
		name: "Basic",
		description: "This is the most basic plan.",
		discount: discount,
		features: [
			{ name: features["f_1"], list: true },
			{ name: features["f_2"], list: true },
			{ name: features["f_3"], list: true },
		],
		featureTitle: featureTitle(),
		highlighted: false,
		price: { annual: 1997, month: 197, once: 4997 },
		note: "+$6/per seat",
	},

	{
		name: "Premium",
		description: "This is the most premium plan.",
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
		highlighted: true,
		price: { annual: 2997, month: 297, once: -1 },
		note: "+$12/per seat",
	},
];

function featureTitle(prevPlan?: string) {
	if (prevPlan) {
		return `All ${prevPlan} features, plus:`;
	}

	return "All features";
}

export default pricing;
