import { StyleSheet, Text, View } from "react-native";
import { windowWidth } from "../../constants/serviceSize";
import theme from "../../styles/globalStyle";

function NumBox() {
	const styles = StyleSheet.create({
		container: {
			justifyContent: "center",
			alignItems: "center",
			gap: theme.gap_4,
		},
		value: {
			// ...theme.fonts.title_18,
			fontSize: 20,
			fontWeight: "bold",
		},
		lastFixed: {
			// ...theme.fonts.label_11,
			fontSize: 11,
			fontWeight: "500",
			color: theme.text_grey_800,
		},
		label: {
			...theme.fonts.label_12,
			color: theme.text_grey_500,
		},
	});
	return (
		<View style={styles.container}>
			<Text style={styles.value}>
				9.3<Text style={styles.lastFixed}>分</Text>
			</Text>
			<Text style={styles.label}>25评分</Text>
		</View>
	);
}

export default function Num() {
	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",
			width: windowWidth,
			padding: theme.padding_16,
			justifyContent: "space-between",
			alignItems: "center",
			backgroundColor: theme.normalColor,
		},
	});
	return (
		<View style={styles.container}>
			<NumBox />
			<NumBox />
			<NumBox />
			<NumBox />
		</View>
	);
}
