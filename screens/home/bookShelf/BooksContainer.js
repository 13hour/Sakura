import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BookBox from "./BookBox";
import { windowHeight, windowWidth } from "../../../constants/serviceSize";
import theme from "../../../styles/globalStyle";
import Loader from "../../../ui/Loader";
import Empty from "../../../ui/Empty";
import { useNavigation } from "@react-navigation/native";

export default function BooksContainer({ bookshelf, ieBookshelfLoading }) {
	const navigation = useNavigation();

	if (ieBookshelfLoading)
		return (
			<View style={styles.container}>
				<Loader size={50} />
			</View>
		);

	const BookshelfView = bookshelf.map(book => (
		<BookBox book={book} key={book.novelId} />
	));
	const EmptyView = (
		<Empty
			title={"书架还没有书籍，快去书城看看吧！"}
			action={() => {
				navigation.navigate({ name: "home" });
			}}
		/>
	);

	return (
		<View style={styles.container}>
			{bookshelf.length ? BookshelfView : EmptyView}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: windowWidth,
		minHeight: windowHeight / 2,
		marginTop: 30,
		paddingHorizontal: theme.padding_16,
		alignItems: "center",
		justifyContent: "center",
	},
});
