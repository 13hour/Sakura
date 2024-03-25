import { StyleSheet, Text, View } from "react-native";
import { windowWidth } from "../../constants/serviceSize";
import Content from "./Content";
import theme from "../../styles/globalStyle";

export default function BookInfoScreen() {
	return (
		<View style={{ width: windowWidth }}>
			<Content />
		</View>
	);
}
