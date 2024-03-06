//cSpell:ignore Pressable

import React, { useEffect, useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { windowWith } from "../../constants/serviceSize";
import theme from "../../styles/globalStyle";
import ButtonIconBase from "../../ui/ButtonIconBase";

// 标题栏左侧分类按钮
function LeftButton({ item: { name, value }, currentRoute, navigation }) {
	const isFocused = currentRoute === value;

	const style = StyleSheet.create({
		focused: {
			...theme.fonts.headlineSmall,
			color: theme.colors.onPrimary,
			fontWeight: "700",
		},
		blur: {
			...theme.fonts.titleMedium,
			color: theme.colors.onPrimary,
			fontSize: 19,
			justifyContent: "center",
			flexDirection: "row",
		},
	});

	function handleClick() {
		if (currentRoute !== value) navigation.navigate(value);
	}

	return (
		<Pressable
			onPress={handleClick}
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}>
			<Text style={isFocused ? style.focused : style.blur}>{name}</Text>
		</Pressable>
	);
}
// 标题栏左侧按钮容器
function LeftButtonContainer({ currentRouteIndex, navigation }) {
	const nameList = useRef([
		{ name: "推荐", value: "introduce" },
		{ name: "男生", value: "man" },
		{ name: "女生", value: "woman" },
	]).current;
	const currentRoute = nameList.at(currentRouteIndex || 0).value || "introduce";

	const containerWidth = windowWith * 0.65;
	const buttonWith = containerWidth / 3;
	const barWidth = containerWidth / 12;
	const barTargetLeft =
		buttonWith * currentRouteIndex + buttonWith / 2 - barWidth / 2;

	const [barLeft] = useState(new Animated.Value(0));
	useEffect(
		function () {
			Animated.timing(barLeft, {
				toValue: barTargetLeft,
				duration: 300,
				useNativeDriver: true,
			}).start();
		},
		[currentRouteIndex]
	);

	const styles = StyleSheet.create({
		leftButtonsContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			width: containerWidth,
			height: 50,
		},
	});
	return (
		<View style={styles.leftButtonsContainer}>
			{nameList.map(item => (
				<LeftButton
					item={item}
					currentRoute={currentRoute}
					theme={theme}
					key={item.value}
					navigation={navigation}
				/>
			))}
			<Animated.View
				style={[
					{
						position: "absolute",
						width: barWidth,
						height: 3,
						backgroundColor: "white",
						bottom: 6,
						borderRadius: 2,
					},
					{
						transform: [{ translateX: barLeft }],
					},
				]}
			/>
		</View>
	);
}

// 标题右侧搜索按钮

function RightButton() {
	return (
		<View style={{ justifyContent: "center" }}>
			<ButtonIconBase
				iconName="magnify"
				size={30}
				color={theme.colors.onPrimary}
			/>
		</View>
	);
}

// 书城自定义标题栏
export default function Header({ props }) {
	const {
		state: { index },
		navigation,
	} = props;

	const currentRouteIndex = index;

	const styles = StyleSheet.create({
		headerContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			paddingLeft: 0,
			width: windowWith,
		},
	});
	return (
		<SafeAreaView style={{ backgroundColor: theme.primaryColor }}>
			<View
				style={[
					styles.headerContainer,
					{ paddingHorizontal: theme.pagePaddingHorizontal },
					{ backgroundColor: theme.primaryColor },
				]}>
				<LeftButtonContainer
					theme={theme}
					currentRouteIndex={currentRouteIndex}
					navigation={navigation}
				/>
				<RightButton theme={theme} />
			</View>
		</SafeAreaView>
	);
}
