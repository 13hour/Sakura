import { useQuery } from "@tanstack/react-query";
import { getBookshelfList } from "../../api/bookShelfApi";

export function useGetBookshelf({ queryKey }) {
	const { data, isLoading, isFetching } = useQuery({
		queryKey: [queryKey],
		queryFn: async () => {
			const data = await getBookshelfList();
			console.log("bookshelf data ==", data);
			return data;
		},
	});

	return { data: data?.data, isLoading, isFetching };
}
