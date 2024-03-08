import { StyleSheet, View } from "react-native";
import { Image } from "react-native";
import theme from "../styles/globalStyle";

/**
 *
 * @param {Number} width - 图片宽度
 * @param {Number} height - 图片高度
 * @param {Number} uri - 图片地址
 * @returns 图片节点
 */
export default function ImageBase({ width = 83, height = 100, uri }) {
	const imageStyle = { width, height };

	const placeholderImageUrl = `https://fakeimg.pl/${width}x${height}/fffafa/?retina=1`;

	return (
		<View style={styles.container}>
			<Image
				style={imageStyle}
				contentFit="cover"
				contentPosition={"center"}
				source={{ uri }}
				defaultSource={{ uri: placeholderImageUrl }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		overflow: "hidden",
		borderRadius: 3,
		backgroundColor: theme.colors.elevation.level1,
	},
});
