import { StyleSheet, Text, View } from "react-native";
import ImageBase from "../../ui/ImageBase";
import theme from "../../styles/globalStyle";
import { windowWidth } from "../../constants/serviceSize";
export default function Cover() {
	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",
			padding: theme.padding_16,
			paddingTop: 190,
			justifyContent: "space-between",
			width: windowWidth,
			backgroundColor: "black",
		},
		leftContainer: {
			flex: 1,
		},
		title: {
			...theme.fonts.title_20,
			fontWeight: "bold",
			color: theme.normalColor,
			marginBottom: 4,
			fontWeight: "bold",
		},
		authorName: {
			...theme.fonts.title_14,
			color: theme.text_grey_300,
		},
		shortInfo: {
			...theme.fonts.label_14,
			color: theme.text_grey_300,
			position: "absolute",
			bottom: 0,
		},
	});
	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<Text style={styles.title}>大奉打更人</Text>
				<Text style={styles.authorName}>卖报小郎君</Text>
				<Text style={styles.shortInfo}>
					仙侠&shy;&bull;&shy;连载&shy;&bull;&shy;521万字
				</Text>
			</View>
			<ImageBase width={90} height={120} />
		</View>
	);
}
