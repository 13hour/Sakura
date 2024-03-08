import { View } from "react-native";
import Content from "./Content";
import theme from "../../styles/globalStyle";
import { windowWidth } from "../../constants/serviceSize";

export default function BookShelfScreen() {
	return (
		<View style={{ width: windowWidth }}>
			<Content />
		</View>
	);
}
