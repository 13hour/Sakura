import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { windowWidth, windowHeight } from "../constants/serviceSize";

export default function Overlay({ backgroundColor = "#fff", children }) {
	const overlayStyle = {
		...styles.overlay,
		backgroundColor,
	};
	return (
		<View style={overlayStyle.overlay} pointerEvents="none">
			{children ? children : <Text>app overlay</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	overlay: {
		position: "absolute",
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		// zIndex: 999,
	},
});
