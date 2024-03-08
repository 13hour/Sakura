import { StyleSheet, View, ActivityIndicator } from "react-native";
import theme from "../styles/globalStyle";

export default function Loader({ size = 100 }) {
	// const [firstCircleSize] = useState(new Animated.Value(0));
	// const [secundCircleSize] = useState(new Animated.Value(0));

	// Animated.loop(
	// 	Animated.timing(firstCircleSize, {
	// 		toValue: 1,
	// 		duration: 2000,
	// 		easing: Easing.bezier(0.45, 0, 0.55, 1),
	// 		useNativeDriver: true,
	// 	})
	// ).start();

	// Animated.loop(
	// 	Animated.timing(secundCircleSize, {
	// 		toValue: 1,
	// 		duration: 2000,
	// 		delay: 1000,
	// 		easing: Easing.bezier(0.45, 0, 0.55, 1),
	// 		useNativeDriver: true,
	// 	})
	// ).start();

	const animationStyle = { ...styles.animation };
	return (
		<View style={[animationStyle]}>
			<ActivityIndicator size={size} color={theme.primaryColor} />
			{/* <Animated.View
				style={[
					styles.circle,
					{
						width: size,
						height: size,
					},
					{
						transform: [{ scale: firstCircleSize }],
						opacity: Animated.subtract(new Animated.Value(1), firstCircleSize),
					},
				]}></Animated.View>
			<Animated.View
				style={[
					styles.circle,
					{
						width: size,
						height: size,
					},
					{
						transform: [{ scale: secundCircleSize }],
						opacity: Animated.subtract(new Animated.Value(1), secundCircleSize),
					},
				]}></Animated.View> */}
		</View>
	);
}

const styles = StyleSheet.create({
	animation: {
		position: "relative",
		// height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	circle: {
		position: "absolute",
		borderRadius: 50,
		borderWidth: 6,
		borderColor: theme.primaryColor,
	},
});
