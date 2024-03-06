import { StyleSheet, Text } from "react-native";

export default function TitleBase({
	color = "black",
	title = "标题",
	style = {},
}) {
	const textStyle = {
		...style,
		color,
		paddingVertical: 2,
	};
	return (
		<>
			<Text style={textStyle}>{title}</Text>
		</>
	);
}
