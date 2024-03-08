import { Pressable, StyleSheet, Text } from "react-native";
import theme from "../styles/globalStyle";

const common = StyleSheet.create({
	button: {
		alignSelf: "center",
		borderRadius: 30,
		paddingHorizontal: 18,
		paddingVertical: 12,
	},
});

const styles = StyleSheet.create({
	primary: {
		fontFamily: "",
		fontSize: 12,
	},
	small: {
		fontFamily: "",
		fontSize: 14,
	},
	medium: {
		fontFamily: "",
		fontSize: 22,
		padding: 14,
	},
	large: {
		fontFamily: "",
		fontSize: 24,
		padding: 16,
		alignSelf: "center",
	},
});

export default function ButtonBase({
	buttonText = "按钮文字",
	color = theme.primaryColor,
	textColor = theme.normalColor,
	type = "primary",
	action,
	paddingHorizontal = common.button.paddingHorizontal,
}) {
	return (
		<Pressable
			style={[
				styles[type],
				{ backgroundColor: color },
				common.button,
				{ paddingHorizontal },
			]}
			onPress={action}>
			<Text style={{ color: textColor, ...theme.fonts.titleBook }}>
				{buttonText}
			</Text>
		</Pressable>
	);
}
