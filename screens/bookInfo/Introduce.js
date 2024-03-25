import { StyleSheet, Text, View } from "react-native";
import theme from "../../styles/globalStyle";
import { windowWidth } from "../../constants/serviceSize";
import { useState } from "react";
import ButtonIconBase from "../../ui/ButtonIconBase";

export default function Introduce() {
	const [isOpen, setIsOpen] = useState(false);

	const styles = StyleSheet.create({
		container: {
			padding: theme.padding_16,
			backgroundColor: theme.normalColor,
			width: windowWidth,
			marginTop: theme.margin_10,
			paddingRight: theme.padding_16 + theme.padding_8,
			paddingBottom: theme.padding_16 * 2,
		},
		title: {
			...theme.fonts.title_18,
			marginBottom: theme.margin_16,
		},
		content: {
			...theme.fonts.label_15,
			color: theme.text_grey_500,
			justifyContent: "space-between",
			overflow: "hidden",
			lineHeight: 24,
			letterSpacing: 1.2,
		},
		arrow: {
			position: "absolute",
			right: theme.padding_4,
			bottom: theme.margin_20,
		},
	});
	return (
		<View style={styles.container}>
			<Text style={styles.title}>简介</Text>
			<Text
				style={[styles.content]}
				ellipsizeMode="tail"
				numberOfLines={isOpen ? 100 : 4}
				onPress={() => setIsOpen(isOpen => !isOpen)}>
				工作年限走什么我我我我我我我我我我我我我我我我我我我我我我哦我我嚄嚄嚄嚄工作年限走什么我我我我我我我我我我我我我我我我我我我我我我哦我我嚄嚄嚄嚄工作年限走什么我我我我我我我我我我我我我我我我我我我我我我哦我我嚄嚄嚄嚄
			</Text>
			<View style={styles.arrow}>
				<ButtonIconBase
					iconName={isOpen ? "menu-up" : "menu-down"}
					size={28}
					color={theme.text_grey_400}
				/>
			</View>
		</View>
	);
}
