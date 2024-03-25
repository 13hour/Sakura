import { StyleSheet, Text } from "react-native";
import theme from "../styles/globalStyle";

export default function TitleBase({ title = "标题", style = {} }) {
	const textStyle = {
		...style,
		paddingVertical: theme.padding_2,
	};
	return <Text style={textStyle}>{title}</Text>;
}
