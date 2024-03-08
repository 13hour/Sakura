import { StyleSheet, Text, View } from "react-native";
import ButtonBase from "./ButtonBase";
import theme from "../styles/globalStyle";

export default function Empty({ title, action, actionText }) {
	const styles = StyleSheet.create({
		container: {
			// flex: 1,
			alignContent: "center",
			justifyContent: "center",
		},
		title: {
			...theme.fonts.titleMedium,
			marginBottom: 10,
		},
	});
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<ButtonBase
				action={action}
				buttonText={"去书城"}
				paddingHorizontal={60}
			/>
		</View>
	);
}
