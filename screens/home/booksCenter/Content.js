import { ScrollView, View } from "react-native";
import Loader from "../../../ui/Loader";
import { useGetBanner } from "./useGetBanner";
import { useGetCategory } from "./useGetCategory";
import theme from "../../../styles/globalStyle";
import CategoryContainer from "./CategoryContainer";
import BooksContainer from "./BooksContainer";
import ImageSwiperBase from "../../../ui/ImageSwiperBase";
import { windowHeight, windowWidth } from "../../../constants/serviceSize";
import ScrollViewBase from "../../../ui/ScrollViewBase";
import BackgroundColor from "../../../ui/BackgroundColor";

export default function Content({ moduleType = 25, channel = 1 }) {
	const queryBannerKey = `/banner?moduleType=${moduleType}&channel=${channel}`;
	const queryCategoryKey = `/module?moduleType=${moduleType}&channel=${channel}`;
	const {
		data: bannerData,
		isLoading: isBannerLoading,
		isFetching: isBannerFetching,
	} = useGetBanner(moduleType, channel, queryBannerKey);
	const {
		data: categoryData,
		isLoading: isCategoryLoading,
		isFetching: isCategoryFetching,
	} = useGetCategory(moduleType, channel, queryCategoryKey);

	const isLoading = isBannerLoading || isCategoryLoading;
	if (isLoading)
		return (
			<View
				style={{
					height: windowHeight / 2,
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Loader size={50} />
			</View>
		);
	return (
		<ScrollViewBase
			isFetching={isBannerFetching || isCategoryFetching}
			queryKeys={[queryBannerKey, queryCategoryKey]}
			containerStyle={{ padding: theme.padding_16 }}>
			{/* 轮播图 */}
			{bannerData.length ? (
				<ImageSwiperBase
					width={windowWidth - theme.padding_24}
					height={120}
					images={bannerData}
				/>
			) : null}
			<BackgroundColor />
			{/* 分类容器 */}
			{categoryData?.moduleTypes.length ? (
				<CategoryContainer data={categoryData?.moduleTypes} />
			) : null}
			<View style={{ flex: 1 }}>
				<BooksContainer data={categoryData?.moduleList} />
			</View>
		</ScrollViewBase>
	);
}
