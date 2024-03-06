import { StyleSheet, Text, View } from "react-native";
import TitleBase from "../../ui/TitleBase";
import theme from "../../styles/globalStyle";

export default function CategoryBox({
	flex = 1,
	module = {},
	backgroundColor = "#ffffff",
}) {
	const style = StyleSheet.create({
		container: {
			flex,
			borderRadius: theme.borderRadius,
			backgroundColor,
			justifyContent: "center",
			paddingLeft: theme.boxPaddingHorizontal,
		},
	});
	return (
		<View style={style.container}>
			<View>
				<TitleBase title={module.typeName} style={theme.fonts.titleBook} />
				<TitleBase title={module.subTypeName} style={theme.fonts.bodySmall} />
			</View>
		</View>
	);
}
