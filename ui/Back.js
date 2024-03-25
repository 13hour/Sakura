import ButtonIconBase from "./ButtonIconBase";
import { useNavigation } from "@react-navigation/native";

export default function Back() {
	const navigation = useNavigation();
	console.log(navigation);
	return (
		<ButtonIconBase
			iconName="chevron-left"
			size={40}
			onPress={() => navigation.goBack()}
		/>
	);
}
