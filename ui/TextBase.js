import { Text } from "react-native";

export default function TextBase({
	color = "black",
	text = "文本",
	style = {},
}) {
	const textStyle = {
		...style,
		color,
		paddingVertical: 2,
	};
	return <Text style={textStyle}>{text}</Text>;
}
