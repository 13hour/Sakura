import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonIconBase from "../../ui/ButtonIconBase";
import theme from "../../styles/globalStyle";

export default function RightButtons() {
	const style = StyleSheet.create({
		container: {
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			gap: theme.gap_8,
			marginRight: 6,
		},
	});
	return (
		<View style={style.container}>
			<ButtonIconBase
				size={30}
				iconName="share-variant"
				color={theme.normalColor}
			/>
			<ButtonIconBase
				size={30}
				iconName="dots-vertical"
				color={theme.normalColor}
			/>
		</View>
	);
}
