import { StyleSheet, Text, View } from "react-native";
import theme from "../../../styles/globalStyle";
import ImageBase from "../../../ui/ImageBase";
import TitleBase from "../../../ui/TitleBase";
import { windowWidth } from "../../../constants/serviceSize";

const imageWidth = 60;

export default function BookBox({ book }) {
	return (
		<View style={styles.container}>
			<ImageBase width={imageWidth} height={76} uri={book.cover} />
			<View>
				<TitleBase title={book.novelName} style={styles.title} />
				<Text numberOfLines={1} style={styles.text}>
					最新:{book.lastChapterName}
				</Text>
				<Text numberOfLines={1} style={styles.text}>
					读到:{book.userLastChapterName}
				</Text>
			</View>
		</View>
	);
}

const textWidth = windowWidth - theme.gap_10 - imageWidth - theme.gap_8;
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: "100%",
		gap: theme.gap_6,
		marginBottom: 28,
	},
	title: {
		...theme.fonts.title_16,
		marginBottom: 10,
		color: theme.text_grey_800,
	},
	text: {
		overflow: "hidden",
		...theme.fonts.label_12,
		color: theme.text_grey_500,
		width: textWidth,
		lineHeight: 18,
	},
});
