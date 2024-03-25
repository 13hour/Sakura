import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryBox from "./CategoryBox";
import theme from "../../../styles/globalStyle";

export default function CategoryContainer({ data }) {
	return (
		<View
			style={{
				width: "100%",
				// flex: 1,
				height: 150,
				flexDirection: "column",
				flexWrap: "wrap",
				justifyContent: "flex-start",
				gap: theme.gap_2,
				marginTop: 16,
			}}>
			<View style={{ flex: 1, flexDirection: "row", gap: theme.gap_2 }}>
				{data.slice(0, 2).map((module, index) => (
					<CategoryBox
						flex={2}
						key={module.id}
						module={module}
						backgroundColor={
							index === 0 ? theme.backgroundColor__1 : theme.backgroundColor__2
						}
					/>
				))}
			</View>

			<View style={{ flex: 1, flexDirection: "row", gap: theme.gap_4 }}>
				{data.slice(2).map(module => (
					<CategoryBox
						flex={2}
						key={module.id}
						module={module}
						backgroundColor={theme.backgroundColor__3}
					/>
				))}
			</View>
		</View>
	);
}
