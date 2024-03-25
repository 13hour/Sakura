import { Pressable, StyleSheet, Text, View } from "react-native";
import theme from "../styles/globalStyle";
import { Ionicons } from "@expo/vector-icons";

export default function ButtonIconText({
	iconSize = 20,
	textStyle = {},
	text = "文本",
	iconColor = "#FFFFFF",
	iconName = "heart-outline",
	iconTop = 0,
	onPress,
}) {
	const styles = StyleSheet.create({
		container: {
			...theme.flex_center_row,
		},
	});
	return (
		<Pressable style={styles.container} onPress={onPress}>
			<Text style={textStyle}>{text}</Text>
			<Text style={{ top: iconTop }}>
				<Ionicons size={iconSize} color={iconColor} name={iconName} />
			</Text>
		</Pressable>
	);
}
