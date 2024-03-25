import { StyleSheet, Text, View } from "react-native";
import ImageBase from "../../../ui/ImageBase";
import theme from "../../../styles/globalStyle";
import { windowWidth } from "../../../constants/serviceSize";

export default function BookBox({ book }) {
	const imageWidth = (windowWidth - theme.padding_24 - 3 * theme.gap_6) / 4;
	const imageHeight = imageWidth * 1.2;
	const styles = StyleSheet.create({
		container: {
			width: imageWidth,
			// borderRadius: theme.borderRadius,
			overflow: "hidden",
			marginTop: 10,
		},
		bookName: {
			...theme.fonts.label_15,
			flexWrap: "wrap",
			width: imageWidth,
			flexDirection: "row",
			height: 45,
			marginTop: 3,
		},
		score: {
			textAlign: "left",
			...theme.fonts.label_16,
			fontWeight: "bold",
			color: theme.primaryColor,
		},
	});

	return (
		<View style={styles.container}>
			<ImageBase width={imageWidth} uri={book.cover} height={imageHeight} />
			<Text style={styles.bookName} ellipsizeMode="tail" numberOfLines={2}>
				{book.novelName}
			</Text>
			<Text style={styles.score}>
				{book.averageScore}
				<Text style={[theme.fonts.label_12, { color: theme.tertiaryColor }]}>
					分
				</Text>
			</Text>
		</View>
	);
}
