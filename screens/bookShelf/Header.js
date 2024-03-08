import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonIconBase from "../../ui/ButtonIconBase";
import theme from "../../styles/globalStyle";

function HeaderTitle() {
	const style = StyleSheet.create({
		text: {
			color: theme.light.textPrimaryColor,
			...theme.fonts.titleLarge,
		},
	});
	return <Text style={style.text}>小说书架</Text>;
}

function RightButtons() {
	const style = StyleSheet.create({
		container: {
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			gap: theme.boxLargerGap,
		},
	});
	return (
		<View style={style.container}>
			<ButtonIconBase
				size={30}
				iconName="magnify"
				color={theme.light.textPrimaryColor}
			/>
			<ButtonIconBase
				size={30}
				iconName="dots-vertical"
				color={theme.light.textPrimaryColor}
			/>
		</View>
	);
}

export default function Header() {
	const style = StyleSheet.create({
		container: {
			flexDirection: "row",
			backgroundColor: theme.primaryColor,
			justifyContent: "space-between",
			alignItems: "center",
			height: theme.headerHeight,
			paddingHorizontal: theme.pagePaddingHorizontal,
		},
	});
	return (
		<SafeAreaView style={{ backgroundColor: theme.primaryColor }}>
			<View style={style.container}>
				<HeaderTitle />
				<RightButtons />
			</View>
		</SafeAreaView>
	);
}
