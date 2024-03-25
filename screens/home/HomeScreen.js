import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import BookShelfScreen from "./bookShelf/BookShelfScreen";
import BooksCenterScreen from "./booksCenter/BooksCenterScreen";
import MyScreen from "./my/MyScreen";
import SearchScreen from "./search/SearchScreen";
import WelfareScreen from "./welfare/WelfareScreen";
import theme from "../../styles/globalStyle";
import Header from "./bookShelf/Header";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
	const activeIconSize = 36;
	const inactiveIconSize = 32;

	return (
		<Tab.Navigator
			headerShown={false}
			screenOptions={{
				tabBarActiveTintColor: theme.primaryColor,
				headerShown: false,
				tabBarStyle: {
					paddingTop: 0,
					paddingBottom: 4,
					height: 62,
				},
			}}
			sceneContainerStyle={{
				backgroundColor: "#ffffff",
			}}>
			<Tab.Screen
				name="bookShelf"
				component={BookShelfScreen}
				options={{
					title: "书架",
					tabBarLabel: "书架",
					tabBarLabelStyle: {
						fontSize: 12,
					},
					headerShown: true,
					header: () => <Header />,
					tabBarIcon: ({ color, focused, size }) => {
						return (
							<MaterialCommunityIcons
								name="bookshelf"
								color={color}
								size={focused ? activeIconSize : inactiveIconSize}
							/>
						);
					},
					focused: false,
				}}
			/>
			<Tab.Screen
				name="booksCenter"
				component={BooksCenterScreen}
				options={{
					tabBarLabel: "书城",
					tabBarLabelStyle: {
						fontSize: 12,
						backgroundColor: "#ffffff",
					},
					tabBarIcon: ({ color, focused, size }) => (
						<MaterialCommunityIcons
							name="book-open-page-variant-outline"
							color={color}
							size={focused ? activeIconSize : inactiveIconSize}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="search"
				component={SearchScreen}
				options={{
					tabBarLabel: "寻书",
					tabBarItemStyle: {
						transform: [{ translateY: -10 }],
						borderWidth: 1,
						borderTopStartRadius: 50,
						borderTopEndRadius: 50,
						borderColor: "#fff",
						borderTopColor: "#eee",
						backgroundColor: "#fff",
					},
					tabBarLabelStyle: {
						fontSize: 12,
						transform: [{ translateY: 11 }],
					},
					tabBarIconStyle: {
						transform: [{ translateY: 2 }],
					},
					tabBarIcon: ({ color, focused, size }) => (
						<MaterialCommunityIcons
							name="book-search-outline"
							color={color}
							size={focused ? activeIconSize : inactiveIconSize}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="welfare"
				component={WelfareScreen}
				options={{
					tabBarLabel: "福利",
					tabBarLabelStyle: {
						fontSize: 12,
					},
					tabBarIcon: ({ color, focused, size }) => (
						<MaterialCommunityIcons
							name="compass-outline"
							color={color}
							size={focused ? activeIconSize : inactiveIconSize}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="my"
				component={MyScreen}
				options={{
					tabBarLabel: "我的",
					tabBarLabelStyle: {
						fontSize: 12,
					},
					tabBarIcon: ({ color, focused, size }) => (
						<MaterialCommunityIcons
							name="account-outline"
							color={color}
							size={focused ? activeIconSize : inactiveIconSize}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
