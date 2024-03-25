import { useQuery } from "@tanstack/react-query";
import { getHomeCategory } from "../../../api/homeScreenApi";

export function useGetCategory(moduleType, channel, queryKey) {
	const { data, isLoading, isFetching } = useQuery({
		queryKey: [queryKey],
		queryFn: async () => {
			const data = await getHomeCategory({ moduleType, channel });
			console.log(data);
			return data;
		},
	});

	return { data: data?.data, isLoading, isFetching };
}
