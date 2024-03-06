import { useQuery } from "@tanstack/react-query";
import { getHomeCategory } from "../../api/homeScreenApi";

export function useGetCategory(moduleType, channel) {
	const { data, isLoading } = useQuery({
		queryKey: [`/module?moduleType=${moduleType}&channel=${channel}`],
		queryFn: async () => {
			const data = await getHomeCategory({ moduleType, channel });
			console.log(data);
			return data;
		},
	});

	return { data: data?.data, isLoading };
}
