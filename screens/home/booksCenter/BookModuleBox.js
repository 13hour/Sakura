import { StyleSheet, View } from "react-native";
import TitleBase from "../../../ui/TitleBase";
import theme from "../../../styles/globalStyle";
import BookBox from "./BookBox";

export default function BookModuleBox({ category }) {
	const { novelList } = category;

	const styles = StyleSheet.create({
		container: {
			flexWrap: "wrap",
			// width: "100%",
			flex: 1,
			flexDirection: "row",
			gap: theme.gap_2,
		},
	});
	return (
		<>
			{novelList.length ? (
				<View>
					<TitleBase
						style={{
							...theme.fonts.title_20,
							fontWeight: "bold",
							marginTop: theme.margin_20,
						}}
						title={category.moduleName}
					/>
					<View style={styles.container}>
						{novelList.map(book => (
							<BookBox book={book} key={book.id} />
						))}
					</View>
				</View>
			) : null}
		</>
	);
}
