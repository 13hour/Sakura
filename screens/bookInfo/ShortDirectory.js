import { StyleSheet, Text, View } from "react-native";
import theme from "../../styles/globalStyle";
import { windowWidth } from "../../constants/serviceSize";
import ButtonIconBase from "../../ui/ButtonIconBase";

export default function ShortDirectory() {
	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",

			gap: theme.gap_8,
			borderTopWidth: 1,
			borderColor: theme.text_grey_100,
			backgroundColor: theme.normalColor,
			justifyContent: "space-between",
			alignItems: "center",
			width: windowWidth,
			padding: theme.padding_16,
		},
		title: {
			...theme.fonts.title_18,
			color: theme.text_grey_800,
		},
		label: {
			...theme.fonts.label_13,
			color: theme.text_grey_500,
		},
		lastUpdate: {
			...theme.fonts.label_13,
			color: theme.text_grey_500,
		},
		arrow: {
			right: theme.gap_14,
		},
	});

	return (
		<View style={styles.container}>
			<Text style={styles.title}>查看目录</Text>
			<Text style={styles.label}>连载中 更新至955 一念一生 大</Text>
			<Text style={styles.lastUpdate}>45个月前</Text>
			<Text style={styles.arrow}>
				<ButtonIconBase
					iconName="chevron-right"
					size={26}
					color={theme.text_grey_400}
				/>
			</Text>
		</View>
	);
}
