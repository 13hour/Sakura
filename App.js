import { StyleSheet, Text } from "react-native";
import { windowHeight, windowWith } from "./constants/serviceSize";

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeScreenContextProvider } from "./context/useHome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/home/HomeScreen";
import BookInfoScreen from "./screens/bookInfo/BookInfoScreen";
import RightButtons from "./screens/bookInfo/RightButtons";
import theme from "./styles/globalStyle";
import ButtonIconBase from "./ui/ButtonIconBase";
import Back from "./ui/Back";

const Stack = createStackNavigator();

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<SafeAreaProvider>
				<HomeScreenContextProvider>
					<NavigationContainer>
						<Stack.Navigator>
							<Stack.Screen
								name="home"
								component={HomeScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name="bookInfo"
								component={BookInfoScreen}
								options={{
									headerTitleAlign: "center",
									headerStyle: {
										backgroundColor: "transparent",
									},
									headerLeft: () => <Back />,
									headerTransparent: true,
									headerTitleStyle: {
										color: theme.normalColor,
									},
									headerRight: () => <RightButtons />,
								}}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</HomeScreenContextProvider>
			</SafeAreaProvider>
		</QueryClientProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		width: windowWith,
		height: windowHeight,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
