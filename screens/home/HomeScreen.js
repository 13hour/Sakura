import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView, View } from "react-native";

import Header from "./Header";
import { windowHeight, windowWith } from "../../constants/serviceSize";
import theme from "../../styles/globalStyle";
import ImageSwiperBase from "../../ui/ImageSwiperBase";
import CategoryContainer from "./CategoryContainer";
import BooksContainer from "./BooksContainer";
import Loader from "../../ui/Loader";
import { useGetBanner } from "./useGetBanner";
import { useGetCategory } from "./useGetCategory";
import Content from "./Content";

const Tab = createMaterialTopTabNavigator();

function ProfileScreen({ navigation, route }) {
	const { moduleType, channel } = route.params;
	return <Content moduleType={moduleType} channel={channel} />;
}

function NotificationsScreen({ navigation, route }) {
	const { moduleType, channel } = route.params;

	return <Content moduleType={moduleType} channel={channel} />;
}

function SettingsScreen({ navigation, route }) {
	const { moduleType, channel } = route.params;

	return <Content moduleType={moduleType} channel={channel} />;
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
