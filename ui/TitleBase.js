import { StyleSheet, Text } from "react-native";

export default function TitleBase({ title = "标题", style = {} }) {
	const textStyle = {
		...style,
		paddingVertical: 2,
	};
	return <Text style={textStyle}>{title}</Text>;
}
