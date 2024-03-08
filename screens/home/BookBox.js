import { StyleSheet, Text, View } from "react-native";
import ImageBase from "../../ui/ImageBase";
import theme from "../../styles/globalStyle";
import { windowWidth } from "../../constants/serviceSize";

export default function BookBox({ book }) {
	const width =
		(windowWidth - theme.pagePaddingHorizontal * 2 - 3 * theme.boxGap) / 4;
	const styles = StyleSheet.create({
		container: {
			width,
			// borderRadius: theme.borderRadius,
			overflow: "hidden",
			marginTop: 10,
		},
		bookName: {
			...theme.fonts.titleBook,
			flexWrap: "wrap",
			width,
			flexDirection: "row",
			height: 45,
			marginTop: 3,
		},
		score: {
			textAlign: "left",
			...theme.fonts.labelLarge,
			fontWeight: "bold",
			color: theme.primaryColor,
		},
	});

	return (
		<View style={styles.container}>
			<ImageBase width={width} uri={book.cover} />
			<Text style={styles.bookName} ellipsizeMode="tail" numberOfLines={2}>
				{book.novelName}
			</Text>
			<Text style={styles.score}>
				{book.averageScore}
				<Text style={[theme.fonts.labelSmall, { color: theme.tertiaryColor }]}>
					分
				</Text>
			</Text>
		</View>
	);
}
