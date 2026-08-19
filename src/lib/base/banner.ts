import type { TCta } from "@lib/utils/types";

export type TBanner = {
	cta: TCta;
	display: boolean;
	label: string;
	varient: "auto-hide" | "constant" | "manual-hide";
};

const banner: TBanner = {
	cta: {
		href: "/",
		icon: "new",
		label: "CTA link",
	},
	display: true,
	label: "Example label",
	varient: "auto-hide",
};

export default banner;
