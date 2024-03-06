import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

/**
 **name:基本图标按钮;
 *!: 图标源使用MaterialCommunityIcons;
 *?:;
 *@param:[{name: iconName, value: string}];
 *@returns: Element;
 */

export default function ButtonIconBase({
	size = 32,
	color = "#ffffff",
	iconName = "bat",
}) {
	return (
		<Pressable>
			<MaterialCommunityIcons size={size} color={color} name={iconName} />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	buttonStyle: {},
});
