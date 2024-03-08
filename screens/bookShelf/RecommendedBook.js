import { StyleSheet, Text, View } from "react-native";
import ImageBase from "../../ui/ImageBase";
import TitleBase from "../../ui/TitleBase";
import Loader from "../../ui/Loader";
import { windowWidth } from "../../constants/serviceSize";
import theme from "../../styles/globalStyle";
import _ from "lodash";
import { useState } from "react";
import useLoop from "../../hooks/useLoop";

export default function RecommendedBook({
	recommendedBookData,
	isLoadingRecommendedBookData,
}) {
	const [clientBookData, setClientBookData] = useState({});
	let recommendedIndex = 0;
	useLoop(
		() => {
			if (_.isArray(recommendedBookData) && recommendedBookData.length) {
				if (recommendedIndex === recommendedBookData.length - 1)
					recommendedIndex = 0;
				setClientBookData(recommendedBookData.at(recommendedIndex));
				recommendedIndex++;
			}
		},
		10000,
		[recommendedBookData]
	);

	if (isLoadingRecommendedBookData) {
		return (
			<View style={styles.container}>
				<Loader size={50} />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<ImageBase width={imageWidth} height={65} uri={clientBookData.cover} />
			<View>
				<TitleBase title={clientBookData.novelName} style={styles.title} />
				<Text ellipsizeMode="tail" numberOfLines={2} style={styles.text}>
					{clientBookData.summary}
				</Text>
			</View>
		</View>
	);
}

const imageWidth = 50;
const containerWidth = windowWidth - theme.pagePaddingHorizontal * 2;
const textWidth = containerWidth - imageWidth - theme.boxPaddingHorizontal * 4;

const styles = StyleSheet.create({
	container: {
		width: containerWidth,
		padding: theme.boxPaddingHorizontal * 2,
		borderRadius: theme.borderRadius_12,
		flexDirection: "row",
		gap: theme.boxLargeGap,
		backgroundColor: theme.normalColor,
		elevation: 1.2,
	},
	title: {
		...theme.fonts.bookShelfTitleBook,
		marginBottom: 8,
		color: theme.text_grey_800,
	},
	text: {
		width: textWidth,
		overflow: "hidden",
		...theme.fonts.bodyBook,
		color: theme.text_grey_500,
	},
});
