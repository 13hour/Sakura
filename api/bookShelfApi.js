import { url, headers } from "./baseApi";

export async function getBookshelfRecommended() {
	try {
		const data = await (
			await fetch(`${url}/bookshelf/recommend`, {
				method: "GET",
				headers: {
					...headers,
				},
			})
		).json();
		if (!data) {
			throw new Error("Couldn't get recommendedBook data!");
		}
		// console.log(11111111);
		// console.log("data==", data);
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
}

export async function getBookshelfList() {
	try {
		const data = await (
			await fetch(`${url}/bookshelf`, {
				method: "GET",
				headers: {
					...headers,
				},
			})
		).json();
		if (!data) {
			throw new Error("Couldn't get bookshelf data!");
		}

		return data;
	} catch (error) {
		throw new Error(error.message);
	}
}
