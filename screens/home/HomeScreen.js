import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView, View } from "react-native";

import Header from "./Header";
import { windowHeight, windowWidth } from "../../constants/serviceSize";
import theme from "../../styles/globalStyle";
import Content from "./Content";

const Tab = createMaterialTopTabNavigator();

function ProfileScreen({ navigation, route }) {
	const { moduleType, channel } = route.params;
	return (
		<View style={{ width: windowWidth }}>
			<Content moduleType={moduleType} channel={channel} />
		</View>
	);
}

function NotificationsScreen({ navigation, route }) {
	const { moduleType, channel } = route.params;

	return (
		<View style={{ width: windowWidth }}>
			<Content moduleType={moduleType} channel={channel} />
		</View>
	);
}

function SettingsScreen({ navigation, route }) {
	const { moduleType, channel } = route.params;

	return (
		<View style={{ width: windowWidth }}>
			<Content moduleType={moduleType} channel={channel} />
		</View>
	);
}

export default function HomeScreen(props) {
	return (
		<Tab.Navigator
			initialRouteName="Notifications"
			tabBar={props => <Header props={props} />}
			screenOptions={{
				headerShown: true,
				swipeEnabled: false,
			}}
			sceneContainerStyle={{
				backgroundColor: theme.light.pageBackgroundColor,
			}}>
			<Tab.Screen
				name="introduce"
				component={NotificationsScreen}
				initialParams={{ moduleType: 24, channel: 1 }}
			/>
			<Tab.Screen
				name="man"
				component={ProfileScreen}
				initialParams={{ moduleType: 25, channel: 1 }}
			/>
			<Tab.Screen
				name="woman"
				component={SettingsScreen}
				initialParams={{ moduleType: 26, channel: 2 }}
			/>
		</Tab.Navigator>
	);
}
