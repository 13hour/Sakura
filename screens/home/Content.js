import { ScrollView, View } from "react-native";
import Loader from "../../ui/Loader";
import { useGetBanner } from "./useGetBanner";
import { useGetCategory } from "./useGetCategory";
import theme from "../../styles/globalStyle";
import CategoryContainer from "./CategoryContainer";
import BooksContainer from "./BooksContainer";
import ImageSwiperBase from "../../ui/ImageSwiperBase";
import { windowWith } from "../../constants/serviceSize";

export default function Content({ moduleType = 25, channel = 1 }) {
	const { data: bannerData, isLoading: isBannerLoading } = useGetBanner(
		moduleType,
		channel
	);
	const { data: categoryData, isLoading: isCategoryLoading } = useGetCategory(
		moduleType,
		channel
	);

	if (isBannerLoading || isCategoryLoading) return <Loader />;
	return (
		<ScrollView
			overScrollMode="always"
			contentContainerStyle={{
				// flex: 1,
				paddingHorizontal: theme.pagePaddingHorizontal,
				paddingVertical: theme.pagePaddingVertical,
				paddingTop: theme.boxPaddingHorizontal,
				alignItems: "center",
			}}>
			<View
				style={{
					width: windowWith,
					height: 100,
					backgroundColor: theme.primaryColor,
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: -1,
				}}
			/>
			{/* 轮播图 */}
			{bannerData.length ? (
				<ImageSwiperBase
					width={windowWith - theme.pagePaddingHorizontal * 2}
					height={120}
					images={bannerData}
				/>
			) : null}
			{/* 分类容器 */}
			{categoryData?.moduleTypes.length ? (
				<CategoryContainer data={categoryData?.moduleTypes} />
			) : null}
			<View style={{ flex: 1 }}>
				<BooksContainer data={categoryData?.moduleList} />
			</View>
		</ScrollView>
	);
}
