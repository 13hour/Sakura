import ScrollViewBase from "../../ui//ScrollViewBase";
import BackgroundColor from "../../ui/BackgroundColor";
import BooksContainer from "./BooksContainer";
import RecommendedBook from "./RecommendedBook";
import { useGetBookshelf } from "./useGetBookshelf";
import { useGetRecommendBook } from "./useGetRecommendBook";

export default function Content() {
	const queryRecommendedKey = "/bookshelf/recommend";
	const queryBookshelfKey = "bookshelf";

	const {
		data: recommendedBookData,
		isLoading: isLoadingRecommendedBookData,
		isFetching: isRecommendedBookFetching,
	} = useGetRecommendBook({ queryKey: queryRecommendedKey });

	const {
		data: bookshelf,
		isLoading: ieBookshelfLoading,
		isFetching: isBookshelfFetching,
	} = useGetBookshelf({ queryKey: queryBookshelfKey });

	const isLoading = isLoadingRecommendedBookData || ieBookshelfLoading;

	return (
		<ScrollViewBase
			isFetching={
				(isRecommendedBookFetching || isBookshelfFetching) && !isLoading
			}
			queryKeys={[queryRecommendedKey, queryBookshelfKey]}>
			<RecommendedBook
				recommendedBookData={recommendedBookData}
				isLoadingRecommendedBookData={isLoadingRecommendedBookData}
			/>
			<BackgroundColor height={80} />
			<BooksContainer
				bookshelf={bookshelf}
				ieBookshelfLoading={ieBookshelfLoading}
			/>
		</ScrollViewBase>
	);
}
