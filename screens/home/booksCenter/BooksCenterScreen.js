import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView, View } from "react-native";

import Header from "./Header";
import { windowHeight, windowWidth } from "../../../constants/serviceSize";
import theme from "../../../styles/globalStyle";
import Content from "./Content";

const Tab = createMaterialTopTabNavigator();

function ManScreen({ navigation, route }) {
	const { moduleType, channel } = route.params;
	return (
		<View style={{ width: windowWidth }}>
			<Content moduleType={moduleType} channel={channel} />
		</View>
	);
}

function IntroduceScreen({ navigation, route }) {
	const { moduleType, channel } = route.params;
	navigation.navigate("bookInfo");
	return (
		<View style={{ width: windowWidth }}>
			<Content moduleType={moduleType} channel={channel} />
		</View>
	);
}

function WomanScreen({ navigation, route }) {
	const { moduleType, channel } = route.params;

	return (
		<View style={{ width: windowWidth }}>
			<Content moduleType={moduleType} channel={channel} />
		</View>
	);
}

export default function BooksCenter(props) {
	return (
		<Tab.Navigator
			initialRouteName="introduce"
			tabBar={props => <Header props={props} />}
			screenOptions={{
				headerShown: true,
				swipeEnabled: false,
			}}
			sceneContainerStyle={{
				backgroundColor: theme.normalColor,
			}}>
			<Tab.Screen
				name="introduce"
				component={IntroduceScreen}
				initialParams={{ moduleType: 24, channel: 1 }}
			/>
			<Tab.Screen
				name="man"
				component={ManScreen}
				initialParams={{ moduleType: 25, channel: 1 }}
			/>
			<Tab.Screen
				name="woman"
				component={WomanScreen}
				initialParams={{ moduleType: 26, channel: 2 }}
			/>
		</Tab.Navigator>
	);
}
