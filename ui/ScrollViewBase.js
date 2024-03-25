import {
	RefreshControl,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import theme from "../styles/globalStyle";
import { useCallback, useState } from "react";
import _ from "lodash";
import { useIsFetching, useQueryClient } from "@tanstack/react-query";

export default function ScrollViewBase({
	children,
	isFetching,
	queryKeys = [],
	containerStyle = {},
}) {
	const queryClient = useQueryClient();
	const [refreshing, setRefreshing] = useState(false);

	const refreshData = () => {
		queryKeys.forEach(key => {
			console.log(key);
			queryClient.refetchQueries({
				queryKey: [key],
				exact: true,
			});
		});
	};
	const onRefresh = useCallback(() => {
		setRefreshing(true);
		refreshData();
		_.delay(() => {
			setRefreshing(false);
		}, 1000);
	}, []);
	console.log("refreshing==", refreshing);
	return (
		<ScrollView
			overScrollMode="always"
			contentContainerStyle={{
				paddingHorizontal: theme.padding_16,

				alignItems: "center",
				...containerStyle,
			}}
			refreshControl={
				<RefreshControl
					refreshing={refreshing || isFetching}
					onRefresh={onRefresh}
					colors={[theme.primaryColor]}
					tintColor={theme.primaryColor}
				/>
			}>
			{children ? (
				children
			) : (
				<Text style={theme.fonts.title_12}>内容加紧准备中</Text>
			)}
		</ScrollView>
	);
}
