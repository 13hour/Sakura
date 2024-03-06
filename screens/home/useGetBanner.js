import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getHomeBanner } from "../../api/homeScreenApi";

export function useGetBanner(moduleType, channel) {
	const { data, isLoading } = useQuery({
		queryKey: [`/banner?moduleType=${moduleType}&channel=${channel}`],
		queryFn: async () => {
			const data = await getHomeBanner({ moduleType, channel });
			return data;
		},
	});
	return { data: data?.data, isLoading };
}
