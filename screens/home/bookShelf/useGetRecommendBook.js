import { useQuery } from "@tanstack/react-query";
import { getBookshelfRecommended } from "../../../api/bookShelfApi";

export function useGetRecommendBook({ queryKey }) {
	const { data, isLoading, isFetching } = useQuery({
		queryKey: [queryKey],
		queryFn: async () => {
			const data = await getBookshelfRecommended();
			console.log("recommendedBook data ==", data);
			return data;
		},
	});

	return { data: data?.data, isLoading, isFetching };
}
