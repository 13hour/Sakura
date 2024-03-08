import { useQuery } from "@tanstack/react-query";
import { getHomeBanner } from "../../api/homeScreenApi";

export function useGetBanner(moduleType, channel, queryKey) {
	const { data, isLoading, isFetching } = useQuery({
		queryKey: [queryKey],
		queryFn: async () => {
			const data = await getHomeBanner({ moduleType, channel });
			console.log(data);
			return data;
		},
	});
	return { data: data?.data, isLoading, isFetching };
}
