import { type CollectionEntry } from "astro:content";

type Collection = CollectionEntry<"blog">;

export function formatDate(
	_date: Date,
	_monthFormat?: "short" | "long",
): string {
	return new Date(_date).toLocaleString("en-US", {
		timeZone: "UTC",
		month: _monthFormat || "short",
		day: "2-digit",
		year: "numeric",
	});
}

export function calcWordCount(_input: string): number {
	const cleanInput = _input
		.replace(/(^\s*)|(\s*$)/gi, "")
		.replace(/[ ]{2,}/gi, " ")
		.replace(/\n /, "\n");

	return cleanInput.split(" ").length;
}

export function calcReadTime(_article: string | undefined): string {
	const wordsPerMinute = 248;

	if (!_article) {
		return "0 min. read";
	}

	const output = Math.ceil(calcWordCount(_article) / wordsPerMinute);

	return `${output} min. read`;
}

export function titleCase(_input: string): string {
	return _input
		.split("-")
		.map((_word) => _word.charAt(0).toUpperCase() + _word.slice(1))
		.join(" ");
}

export function findContent(
	_contentArray: Array<Collection>,
	_id: string,
): Collection {
	return (
		_contentArray.find((_content) => _content.id === _id) ||
		_contentArray[0]
	);
}

export function setHref(_content: Collection): string {
	const { collection, id } = _content;

	return `/${collection}/${id}`;
}

export function setWarning(_element: string, _prop: string): void {
	return console.warn(
		`⚠️ <${_element} />: ${_prop} property is either missing or invalid.`,
	);
}
