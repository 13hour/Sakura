import { StyleSheet } from "react-native";
import { windowHeight, windowWith } from "./constants/serviceSize";

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabNavigator from "./screens/BottomTabNavigator";
import { HomeScreenContextProvider } from "./context/useHome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<SafeAreaProvider>
				<HomeScreenContextProvider>
					<NavigationContainer>
						<BottomTabNavigator />
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
