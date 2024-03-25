import { StyleSheet, Text, View } from "react-native";
import theme from "../../styles/globalStyle";
import { windowWidth } from "../../constants/serviceSize";
import ImageBase from "../../ui/ImageBase";
import ButtonIconText from "../../ui/ButtonIconText";
import { useState } from "react";
import { set } from "lodash";

function BookBox() {
	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",
			gap: theme.gap_12,
			width: windowWidth - theme.padding_16 * 2,
			paddingVertical: theme.padding_8,
			// flex: 1,
		},
		bookName: {
			flexDirection: "row",
			justifyContent: "space-between",
			...theme.fonts.title_16,
			fontWeight: "600",
			alignItems: "center",
			// flex: 1,
		},
		intro: {
			...theme.fonts.label_14,
			color: theme.text_grey_500,
			marginTop: theme.margin_8,
		},
		info: {
			...theme.fonts.label_12,
			color: theme.text_grey_500,
			marginTop: "auto",
		},
	});

	return (
		<View style={styles.container}>
			<ImageBase width={76} />
			<View style={{ flex: 1 }}>
				<View style={styles.bookName}>
					<Text style={styles.bookName}>我的姐姐是大明星</Text>
					<View style={{ flexDirection: "row", alignItems: "baseline" }}>
						<Text
							style={{
								...theme.fonts.label_20,
								color: theme.primaryColor,
							}}>
							8.8
						</Text>
						<Text
							style={{ ...theme.fonts.label_10, color: theme.tertiaryColor }}>
							分
						</Text>
					</View>
				</View>
				<Text style={styles.intro} ellipsizeMode="tail" numberOfLines={2}>
					某年某月某日，祸水姐姐忽然说某年某月某日，祸水姐姐忽然说某年某月某日，祸水姐姐忽然说
					某年某月某日，祸水姐姐忽然说某年某月某日，祸水姐姐忽然说某年某月某日，祸水姐姐忽然说
				</Text>
				<Text style={styles.info}>
					仙侠&shy;&bull;&shy;连载&shy;&bull;&shy;521万字
				</Text>
			</View>
		</View>
	);
}

export default function LinkBooks() {
	const [isOpen, setIsOpen] = useState(false);

	const styles = StyleSheet.create({
		container: {
			backgroundColor: theme.normalColor,
			width: windowWidth,
			paddingVertical: theme.padding_16,
			paddingBottom: 0,
		},
		header: {
			...theme.fonts.title_18,
			color: theme.text_grey_900,
			marginBottom: theme.margin_12,
		},
		section: {
			paddingHorizontal: theme.padding_16,
		},
		content: {
			marginBottom: theme.margin_20,
		},
		footer: {
			backgroundColor: theme.normalBackgroundColor,
			paddingTop: theme.padding_8,
		},
	});

	return (
		<View style={styles.container}>
			<View style={styles.section}>
				<Text style={styles.header}>TA写过的书</Text>
				<View style={styles.content}>
					<BookBox />
				</View>
			</View>
			<View style={styles.footer}>
				<ButtonIconText
					iconName={isOpen ? "chevron-up-outline" : "chevron-down-outline"}
					iconSize={20}
					text="查看更多"
					textStyle={{ color: theme.text_grey_600 }}
					iconColor={theme.text_grey_500}
					onPress={() => setIsOpen(isOpen => !isOpen)}
				/>
			</View>
		</View>
	);
}
