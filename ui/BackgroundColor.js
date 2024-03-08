import { View } from "react-native";
import React from "react";
import { windowWidth } from "../constants/serviceSize";
import theme from "../styles/globalStyle";

export default function BackgroundColor({ height = 100 }) {
	return (
		<View
			style={{
				width: windowWidth,
				height,
				backgroundColor: theme.primaryColor,
				position: "absolute",
				top: 0,
				left: 0,
				zIndex: -1,
			}}
		/>
	);
}
