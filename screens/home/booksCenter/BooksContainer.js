import { View } from "react-native";
import BookModuleBox from "./BookModuleBox";

export default function BooksContainer({ data }) {
	return (
		<View>
			{data.map(category => (
				<BookModuleBox category={category} key={category.moduleId} />
			))}
		</View>
	);
}
