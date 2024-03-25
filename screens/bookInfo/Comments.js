import {
	Alert,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
	requireNativeComponent,
} from "react-native";
import theme from "../../styles/globalStyle";
import { windowWidth } from "../../constants/serviceSize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonIconText from "../../ui/ButtonIconText";

function Avatar() {
	const styles = StyleSheet.create({
		avatar: {
			flexDirection: "row",
			width: "100%",
			gap: theme.gap_6,
			justifyContent: "flex-start",
			alignItems: "center",
		},
		name: {
			...theme.fonts.label_16,
			color: theme.text_grey_600,
		},
	});
	return (
		<View style={styles.avatar}>
			<Image
				defaultSource={require("../../assets/default-user.jpg")}
				source={require("../../assets/default-user.jpg")}
				style={{ width: 30, height: 30 }}
			/>
			<Text style={styles.name}>阅读书友1234567890</Text>
		</View>
	);
}

function UserComment() {
	return (
		<Text
			style={{
				paddingVertical: theme.padding_6,
				marginBottom: theme.margin_6,
				...theme.fonts.label_16,
				color: theme.text_grey_900,
			}}>
			卡门在安康妈妈澳柯玛出门
		</Text>
	);
}
function Header() {
	const styles = StyleSheet.create({
		header: {
			flexDirection: "row",
			width: "100%",
			justifyContent: "space-between",
			marginBottom: theme.margin_16,
		},
		title: {
			...theme.fonts.title_18,
			color: theme.text_grey_900,
		},
		lastFixed: {
			fontStyle: "normal",
			fontSize: 14,
			color: theme.text_grey_900,
		},
		edit: {
			...theme.fonts.label_14,
			color: theme.text_grey_900,
		},
	});
	return (
		<View style={styles.header}>
			<Text style={styles.title}>
				书评<Text style={styles.lastFixed}>（2条）</Text>
			</Text>
			<Pressable
				style={{ ...theme.flex_center_row, gap: theme.gap_2 }}
				onPress={() => console.log(3333)}>
				<MaterialCommunityIcons
					size={24}
					color={theme.text_grey_700}
					name={"account-edit-outline"}
				/>
				<Text style={styles.edit}>写评论</Text>
			</Pressable>
		</View>
	);
}
function Reply() {
	const styles = StyleSheet.create({
		container: {
			padding: theme.padding_8,
			backgroundColor: theme.backgroundColor__3,
			borderRadius: theme.borderRadius_4,
			marginBottom: theme.margin_14,
			// gap: theme.gap_6,
		},
		userName: {
			...theme.fonts.label_15,
			color: theme.text_blue_400,
		},
		comment: {
			...theme.fonts.label_15,
			color: theme.text_grey_800,
			lineHeight: 26,
			overflow: "hidden",
		},
	});
	return (
		<View style={styles.container}>
			<Text style={styles.userName} ellipsizeMode="tail" numberOfLines={2}>
				阅读书友_834：
				<Text style={styles.comment}>
					他不在起点写书他不在起点写书他不在起点写书他不在起点写书起点写书
				</Text>
			</Text>
			<Text style={styles.userName}>
				阅读书友_834：<Text style={styles.comment}>他不在起点写书</Text>
			</Text>
			<Text style={styles.userName}>
				阅读书友_834：<Text style={styles.comment}>他不在起点写书</Text>
			</Text>
			<Text style={styles.userName}>
				阅读书友_834：<Text style={styles.comment}>他不在起点写书</Text>
			</Text>
		</View>
	);
}
function Operator() {
	const styles = StyleSheet.create({
		operator: {
			flexDirection: "row",
			width: "100%",
			justifyContent: "space-between",
			alignItems: "center",
			marginBottom: theme.margin_8,
		},
		label: {
			...theme.fonts.label_12,
			color: theme.text_grey_500,
		},
	});
	return (
		<View style={styles.operator}>
			<Text style={styles.label}>2023-10-17 22:18</Text>
			<ButtonIconText
				iconColor={theme.text_grey_400}
				text="回复"
				iconName="chatbox-ellipses-outline"
				textStyle={{
					...theme.fonts.label_12,
					color: theme.text_grey_500,
					marginRight: theme.gap_4,
				}}
				onPress={() => console.log(11111)}
			/>
			<ButtonIconText
				iconColor={theme.text_grey_400}
				text="3"
				iconName="heart-outline"
				textStyle={{
					...theme.fonts.label_12,
					color: theme.text_grey_500,
					marginRight: theme.gap_4,
				}}
				onPress={() => console.log(2222)}
			/>
		</View>
	);
}
function Footer() {
	const styles = StyleSheet.create({
		footer: {
			width: "100%",
			textAlign: "center",
			...theme.fonts.label_14,
			lineHeight: 30,
			color: theme.text_grey_600,
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
	});
	return (
		<View style={styles.footer}>
			<Text style={{ color: theme.text_grey_600 }}>查看全部2条评论</Text>
			<Text style={{ top: 1 }}>
				<MaterialCommunityIcons
					size={20}
					color={theme.text_grey_500}
					name={"chevron-right"}
				/>
			</Text>
		</View>
	);
}
export default function Comments() {
	const styles = StyleSheet.create({
		container: {
			width: windowWidth,
			backgroundColor: theme.normalColor,
			padding: theme.padding_16,
			margin: theme.margin_10,
		},
		content: {
			paddingLeft: 36,
			marginBottom: theme.margin_20,
		},
	});

	return (
		<View style={styles.container}>
			<Header />
			<Avatar />
			<View style={styles.content}>
				<UserComment />
				<Operator />
				<Reply />
			</View>
			<Footer />
		</View>
	);
}
