import { StyleSheet, Text, View } from "react-native";
import TitleBase from "../../../ui/TitleBase";
import theme from "../../../styles/globalStyle";

export default function CategoryBox({
	flex = 1,
	module = {},
	backgroundColor = "#ffffff",
}) {
	const style = StyleSheet.create({
		container: {
			flex,
			borderRadius: theme.borderRadius_6,
			backgroundColor,
			justifyContent: "center",
			paddingLeft: theme.padding_16,
		},
	});
	return (
		<View style={style.container}>
			<View>
				<TitleBase title={module.typeName} style={theme.fonts.title_16} />
				<TitleBase title={module.subTypeName} style={theme.fonts.label_12} />
			</View>
		</View>
	);
}
