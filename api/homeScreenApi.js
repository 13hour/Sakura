import { url, headers } from "./baseApi";

/**
 * *发送请求获取轮播图数据
 * @param {number} moduleType
 * @param {number} channel
 * @returns data - 请求到的数据
 */

export async function getHomeBanner({ moduleType = 1, channel = 1 }) {
	try {
		const data = await (
			await fetch(`${url}/banner?moduleType=${moduleType}&channel=${channel}`, {
				method: "GET",
				header: {
					...headers,
				},
			})
		).json();
		if (!data) {
			throw new Error("Couldn't get banner data!");
		}
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
}

export async function getHomeCategory({ moduleType = 1, channel = 1 }) {
	try {
		const data = await (
			await fetch(`${url}/module?moduleType=${moduleType}&channel=${channel}`, {
				method: "GET",
				header: {
					...headers,
				},
			})
		).json();
		if (!data) {
			throw new Error("Couldn't get module data!");
		}
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
}
