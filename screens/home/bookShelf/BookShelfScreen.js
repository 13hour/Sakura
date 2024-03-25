import { View } from "react-native";
import Content from "./Content";
import { windowWidth } from "../../../constants/serviceSize";

export default function BookShelfScreen() {
	return (
		<View style={{ width: windowWidth }}>
			<Content />
		</View>
	);
}
